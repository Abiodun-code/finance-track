import { apiClient } from "@/services/api/apiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(

  'auth/createUser',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await apiClient.post('auth/sign-up', { email, password })
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
    }
  }
);

export const updateFirstName = createAsyncThunk(
  'auth/updateFirstName',
  async ({ firstName, email }: { firstName: string; email: string }, { rejectWithValue }) => {
    try {
      const res = await apiClient.put(`/first-update/${email}`, { firstName });
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateLastName = createAsyncThunk(
  'auth/updateLastName',
  async ({ lastName, email }: { lastName: string; email: string }, { rejectWithValue }) => {
    try {
      const res = await apiClient.put(`/last-update/${email}`, { lastName });
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async ({ otp, email }: { otp: number; email: string }, { rejectWithValue }) => {
    try {
      const res = await apiClient.post(`/verify-otp/${email}`, { otp });
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const res = await apiClient.post(`/resend-otp/${email}`);
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  })