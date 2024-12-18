import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { clearAuth, setAuth } from "@/services/store/not-authenticated/createAccountSlice";
import { RootState } from "@/services/store/store";
import { setIsUpdatedFalse } from "@/services/store/authenticated/update-user-detail";

const useCurrentUser = () => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState<null>(null);
  const [currentUserIsLoading, setCurrentUserIsLoading] = useState<boolean>(false);

  const { isUpdated } = useSelector<RootState>(
    (state) => state.updateUser
  );

  // Helper function to load user data
  const loadUserData = async () => {
    try {
      setCurrentUserIsLoading(true);
      const savedUser = await AsyncStorage.getItem("user");
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setCurrentUser(parsedUser);
        dispatch(setAuth({ user: parsedUser }));
      } else {
        setCurrentUser(null);
        dispatch(clearAuth());
      }
    } catch (error) {
      console.error("Failed to load user data:", error);
      setCurrentUser(null);
    } finally {
      setCurrentUserIsLoading(false);
    }
  };

  // Load user data when component mounts
  useEffect(() => {
    loadUserData();
  }, []);

  // Reload user data if updated
  useEffect(() => {
    if (isUpdated) {
      loadUserData();
      dispatch(setIsUpdatedFalse());
    }
  }, [isUpdated, dispatch]);

  return { currentUser, currentUserIsLoading };
};

export default useCurrentUser;
