import { configureStore } from "@reduxjs/toolkit";
import createAccountReducer from "./not-authenticated/sign-up/createAccountSlice"
import { updateUserReducer } from "./authenticated/update-user-detail";
import { loginAccountReducer } from "./not-authenticated/sign-in/loginSlice";
import { forgetPasswordReducer } from "./not-authenticated/forget-password/forgetSlice";

export const store = configureStore({
  reducer: {
    createAccount: createAccountReducer,
    loginAccount: loginAccountReducer,
    forgetPassword: forgetPasswordReducer,
    updateUser: updateUserReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>