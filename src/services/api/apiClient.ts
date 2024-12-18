import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:8080/';

// Create Axios instance
export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {'Content-Type':'application/json'}
});

// Helper to get accessToken from AsyncStorage
const getAccessToken = async () => await AsyncStorage.getItem('accessToken');

// Helper to refresh the token
const refreshAccessToken = async () => {
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  if (!refreshToken) throw new Error('No refresh token found');

  const response = await apiClient.get(`/refresh-token/${refreshToken}`);
  const { accessToken } = response.data;

  // Update AsyncStorage and return the new access token
  await AsyncStorage.setItem('accessToken', accessToken);
  return accessToken;
};

// Request Interceptor: Attach Authorization Header
apiClient.interceptors.request.use(
  async (config:any) => {
    const token = await getAccessToken();
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle 401 Unauthorized and Refresh Token
apiClient.interceptors.response.use(
  (response) => response, // On success, return the response
  async (error) => {
    const originalRequest = error.config;

    // Check for 401 Unauthorized and retry
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Prevent multiple retries
      try {
        const newAccessToken = await refreshAccessToken();

        // Update the Authorization header for the failed request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry the original request
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Token refresh failed, log out the user
        console.error('Token refresh failed:', refreshError);
        await AsyncStorage.removeItem('accessToken');
        await AsyncStorage.removeItem('refreshToken');
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
