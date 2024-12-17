import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:8080/auth';

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

apiClient.interceptors.response.use((response) => response, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (refreshToken) {
      try {
        const res = await apiClient.get(`/refresh-token/${refreshToken}`);
        await AsyncStorage.setItem('accessToken', res.data.accessToken);
        apiClient.defaults.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
        return apiClient(originalRequest);
      } catch (err) {
        // Failed to refresh token, logout
        AsyncStorage.removeItem('refreshToken');
        return Promise.reject(err);
      }
    }
  }
  return Promise.reject(error);
});

