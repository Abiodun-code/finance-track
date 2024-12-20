import { configureStore } from "@reduxjs/toolkit";
import createAccountReducer from "./not-authenticated/createAccountSlice"
import { updateUserReducer } from "./authenticated/update-user-detail";
import { loginAccountReducer } from "./not-authenticated/loginSlice";

export const store = configureStore({
  reducer: {
    createAccount: createAccountReducer,
    loginAccount: loginAccountReducer,
    updateUser: updateUserReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>