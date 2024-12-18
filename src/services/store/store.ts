import { configureStore } from "@reduxjs/toolkit";
import createAccountReducer from "./not-authenticated/createAccountSlice"
import { updateUserReducer } from "./authenticated/update-user-detail";

export const store = configureStore({
  reducer: {
    createAccount: createAccountReducer,
    updateUser: updateUserReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>