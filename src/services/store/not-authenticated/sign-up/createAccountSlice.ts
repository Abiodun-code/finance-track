import { apiClient } from "@/services/api/apiClient";
import { createSlice } from "@reduxjs/toolkit";
import { createUser, updateFirstName, updateLastName, verifyOtp } from "./createAccountThunk";

const initialState = {
  error: false,
  message: "",
  isLoading: false,
};

const createAccountSlice = createSlice({
  name: "createAccount",
  initialState,
  reducers: {},
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
  },
});

export default createAccountSlice.reducer;