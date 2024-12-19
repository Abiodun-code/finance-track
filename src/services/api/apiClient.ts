import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../store/store';

const API_URL = 'http://localhost:8080/'; // Update this to your backend URL

// Create Axios instance
export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

// Helper to get accessToken from AsyncStorage
const getAccessToken = async () => await AsyncStorage.getItem('accessToken');

// Helper to refresh the token
const refreshAccessToken = async () => {
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  if (!refreshToken) throw new Error('No refresh token found');

  const response = await apiClient.get('/auth/refresh-token');
  const { accessToken } = response.data;

  // Update AsyncStorage and return the new access token
  await AsyncStorage.setItem('accessToken', accessToken);
  return accessToken;
};

// Prevent multiple simultaneous refresh requests
let isRefreshing = false;
let refreshSubscribers: Array<(token: string) => void> = [];

const onRefreshed = (newAccessToken: string) => {
  refreshSubscribers.forEach((callback) => callback(newAccessToken));
  refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
};

// Request Interceptor: Attach Authorization Header
apiClient.interceptors.request.use(
  async (config: any) => {
    const token = await getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle 401 Unauthorized and Refresh Token
apiClient.interceptors.response.use(
  (response) => response, // Handle successful responses
  async (error) => {
    const originalRequest = error.config;

    // Check for 401 Unauthorized and retry
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscriber((newAccessToken) => {
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            resolve(apiClient(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newAccessToken = await refreshAccessToken();
        onRefreshed(newAccessToken);
        isRefreshing = false;

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest); // Retry the original request
      } catch (refreshError) {
        isRefreshing = false;
        console.error('Token refresh failed, logging out user:', refreshError);

        // Clear AsyncStorage and log the user out
        await AsyncStorage.clear();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
