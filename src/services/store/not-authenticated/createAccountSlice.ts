import { apiClient } from "@/services/api/apiClient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { createUser, updateFirstName, updateLastName, verifyOtp } from "./createAccountThunk";

const initialState = {
  error: false,
  message: "",
  accessToken: null,
  refreshToken: null,
  isLoading: false,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue, dispatch }) => {
    try {
      const res = await apiClient.post('/auth/sign-in', { email, password });
      const { accessToken, refreshToken } = res.data;

      // Store tokens and user in AsyncStorage
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);
      await AsyncStorage.setItem('user', JSON.stringify(res.data?.user));

      dispatch(setAuth({ accessToken, refreshToken }));

      return { accessToken, refreshToken };
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.message || 'Network Error');
      }
      return rejectWithValue('An unexpected error occurred');
      
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { dispatch }) => {
  await AsyncStorage.clear(); // Clear all stored tokens and user data
  dispatch(clearAuth()); // Reset Redux state
});


const createAccountSlice = createSlice({
  name: "createaccount",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.message = action.payload;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearAuth(state) {
      state.message = "";
      state.accessToken = null;
      state.refreshToken = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })

      // Handle first name update
      .addCase(updateFirstName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateFirstName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(updateFirstName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true
      })

      // Handle last name update
      .addCase(updateLastName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateLastName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(updateLastName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })

      // Handle OTP verification
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })

      // Handle Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessToken = action.payload?.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })

      // Handle Log out
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default createAccountSlice.reducer;
export const { setAuth, clearAuth } = createAccountSlice.actions;
