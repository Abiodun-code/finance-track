import { apiClient } from "@/services/api/apiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await apiClient.post('/sign-in', { email, password });
      return res.data; // { accessToken, refreshToken, user }
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  'auth/refreshToken',
  async ({ refreshToken }: { refreshToken: string }, { rejectWithValue }) => {
    try {
      const res = await apiClient.post('/refresh-token', { refreshToken });
      return res.data; // { accessToken }
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
