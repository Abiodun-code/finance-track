import { createSlice } from "@reduxjs/toolkit"
import { changePassword, forgetEmail, forgetOtp } from "./forgetThunk";

const initialState = {
  error: false,
  message: "",
  isLoading: false,
}

const forgetPassword = createSlice({
  name: "forgetPassword",
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      // Handle Email
      .addCase(forgetEmail.pending, (state)=>{
        state.isLoading = true;
      })
      .addCase(forgetEmail.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(forgetEmail.rejected, (state)=>{
        state.isLoading = false;
        state.error = true;
      })

      // Handle Otp
      .addCase(forgetOtp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgetOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(forgetOtp.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })

      // Handle Change password
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(changePassword.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
  },
})

export const forgetPasswordReducer = forgetPassword.reducer;