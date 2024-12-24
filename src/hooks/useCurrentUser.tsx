import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/store/store";
import { fetchUserFromAsyncStorage } from "@/services/store/authenticated/update-user-detail";

const useCurrentUser = () => {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state: RootState) => state.updateUser);

  useEffect(() => {
    dispatch<any>(fetchUserFromAsyncStorage());
  }, [dispatch]);

  return { user, isLoading, error };
};

export default useCurrentUser;
