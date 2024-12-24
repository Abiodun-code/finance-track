import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  user: null, // Stores the global user data
  isLoading: false,
  error: null,
};

export const fetchUserFromAsyncStorage = createAsyncThunk(
  "user/fetchFromAsyncStorage",
  async (_, { rejectWithValue }) => {
    try {
      const user = await AsyncStorage.getItem("user");
      return user ? JSON.parse(user) : null;
    } catch (error) {
      return rejectWithValue("Failed to fetch user from AsyncStorage");
    }
  }
);

export const updateUserInAsyncStorage = createAsyncThunk(
  "user/updateInAsyncStorage",
  async (updatedUser: any, { rejectWithValue }) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    } catch (error) {
      return rejectWithValue("Failed to update user in AsyncStorage");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserFromAsyncStorage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUserFromAsyncStorage.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUserFromAsyncStorage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(updateUserInAsyncStorage.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const updateUserReducer = userSlice.reducer;
