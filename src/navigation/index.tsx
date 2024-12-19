import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NotAuthenticated from './not-authenticated';
import Authenticated from './authenticated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { RootState } from '@/services/store/store';

const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Get the token from Redux
  const loginToken = useSelector<RootState, string | null>(
    (state) => state.loginAccount.accessToken
  );

  // Function to check the auth status from AsyncStorage
  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      console.log('Token in AsyncStorage:', token); // Debug log
      setIsAuthenticated(!!token); // Set auth status
    } catch (error) {
      console.error('Error checking auth status:', error); // Add error log
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    // Check auth status on component mount
    checkAuthStatus();
  }, []);

  useEffect(() => {
    // Listen for changes in loginToken and update auth status
    setIsAuthenticated(!loginToken); // Simplified logic
  }, [loginToken]);

  console.log('IsAuthenticated:', isAuthenticated); // Debug log

  return (
    <NavigationContainer>
      {isAuthenticated === null ? null : isAuthenticated ? (
        <Authenticated />
      ) : (
        <NotAuthenticated />
      )}
    </NavigationContainer>
  );
};

export default Main;
