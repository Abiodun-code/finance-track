import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NotAuthenticated from './not-authenticated'
import Authenticated from './authenticated'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Check for token in AsyncStorage
  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      setIsAuthenticated(!!token); // Set true if token exists, false otherwise
    } catch (error) {
      console.error('Error checking auth status:', error);
      setIsAuthenticated(false);
    }
  };

  console.log(isAuthenticated);
  

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <Authenticated/> : <NotAuthenticated/>}
    </NavigationContainer>
  )
}

export default Main