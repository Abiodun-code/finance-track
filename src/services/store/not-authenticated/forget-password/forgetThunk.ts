import { apiClient } from "@/services/api/apiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const forgetEmail = createAsyncThunk(

  'auth/forgetEmail',
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const res = await apiClient.post('auth/forget-password', { email })
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
    }
  }
);

export const forgetOtp = createAsyncThunk(
  'auth/forgetOtp',
  async ({ otp, email }: { otp: number; email: string }, { rejectWithValue }) => {
    try {
      const res = await apiClient.post(`/auth/forget-otp/${email}`, { otp });
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const forgetResend = createAsyncThunk(
  "auth/forgetResend",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const res = await apiClient.post(`/auth/forget-resend/${email}`);
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async ({ email, newPassword, confirmPassword}: { email: string; newPassword: string; confirmPassword: string },{ rejectWithValue }) => {
    try {
      const res = await apiClient.post(`/auth/forget-change/${email}`, { newPassword, confirmPassword });
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
