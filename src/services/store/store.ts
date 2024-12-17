import { configureStore } from "@reduxjs/toolkit";
import createAccountReducer from "./not-authenticated/createAccountSlice"

export const store = configureStore({
  reducer: {
    createAccount: createAccountReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>