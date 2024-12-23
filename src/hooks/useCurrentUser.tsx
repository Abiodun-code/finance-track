import { useLayoutEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/services/store/store';
import { setIsUpdatedFalse, updateUserState } from '@/services/store/authenticated/update-user-detail';

const useCurrentUser = () => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState<any>(null); // Default to null instead of undefined
  const [currentUserIsLoading, setCurrentUserIsLoading] = useState<boolean>(true); // Default to true to show loading initially
  const { isUpdated } = useSelector<RootState>((state) => state.updateUser) as updateUserState;

  // Effect to fetch the current user data from AsyncStorage
  useLayoutEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setCurrentUserIsLoading(true);
        const savedUser = await AsyncStorage.getItem('user');
        if (savedUser) {
          const currentLoggedInUser = JSON.parse(savedUser);
          setCurrentUser(currentLoggedInUser);
        } else {
          setCurrentUser(null); // In case no user data is found
        }
      } catch (e) {
        console.error('Error fetching user from AsyncStorage:', e);
      } finally {
        setCurrentUserIsLoading(false);
      }
    };

    // Fetch user data and update state
    fetchCurrentUser();

    // Handle isUpdated flag, only dispatch if the user is updated
    if (isUpdated) {
      dispatch(setIsUpdatedFalse());
    }
  }, [isUpdated, dispatch]); // Effect runs whenever isUpdated changes
  
  return { currentUser, currentUserIsLoading };
};

export default useCurrentUser;
