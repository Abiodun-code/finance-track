import { apiClient } from "@/services/api/apiClient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createUser, updateFirstName, updateLastName, verifyOtp } from "./createAccountThunk";

const initialState = {
  isAuthenticated: false,
  error: false,
  user: null,
  isLoading: false,
};

// Slice

const createAccountSlice = createSlice({
  name: "createaccount",
  initialState,
  reducers: {
    setAuth(state, action){
      state.user = action.payload;
      state.isAuthenticated = true
    },
    clearAuth(state){
      state.user = null;
      state.isAuthenticated = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
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
        state.user = action.payload;
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
        state.user = action.payload;
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
      });
  },
});

export default createAccountSlice.reducer;
export const { setAuth, clearAuth } = createAccountSlice.actions;

// Async Thunk to persist state
export const loadUserFromStorage = () => async (dispatch: (arg0: { payload: any; type: "createaccount/setAuth"; }) => void) => {
  const user = await AsyncStorage.getItem('user');
  if (user) {
    dispatch(setAuth(JSON.parse(user)));
  }
};

export const persistUserToStorage = (user: any)=>async()=>{
  await AsyncStorage.setItem('user', JSON.stringify(user));
}

export const clearUserFromStorage = ()=>async()=>{
  await AsyncStorage.removeItem("user");
}