import { apiClient } from "@/services/api/apiClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError } from "axios";

const initialState = {
  error: false,
  message: "",
  accessToken: "",
  refreshToken: "",
  isLoading: false,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue, dispatch }) => {
    try {
      const res = await apiClient.post("/auth/sign-in", { email, password });
      const { accessToken, refreshToken, user } = res.data;

      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);
      await AsyncStorage.setItem('user', JSON.stringify(user));

      dispatch(setAuth({ accessToken, refreshToken }));
      console.log(user);

      return accessToken;
    } catch (error) {
      console.log('Error during login:', error); // Add this to debug
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.message || 'Network Error');
      }
      return rejectWithValue('An unexpected error occurred');
    }

  }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { dispatch }) => {
  try {
    // Clear only relevant keys
    await AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'user']);

    await AsyncStorage.removeItem("accessToken");

    // Reset Redux state
    dispatch(clearAuth());
    console.log('Logout successful');
  } catch (error) {
    console.error('Error during logout:', error);
    throw error;
  }
});

export const loginAccount = createSlice({
  name: "loginAccount",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.message = action.payload;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearAuth(state) {
      state.message = "";
      state.accessToken = "";
      state.refreshToken = "";
    }
  },
  extraReducers: (builder) => {
    builder
      // Handle Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessToken = action.payload?.accessToken;
        state.refreshToken = action.payload?.refreshToken;
        state.error = false
          ;
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

export const loginAccountReducer = loginAccount.reducer;

export const { setAuth, clearAuth } = loginAccount.actions;