import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserInAsyncStorage } from "../update-user-detail";

const API_URL = process.env.API_URL;

const initialState = {
  isLoading: false,
  error: null,
  success: false,
};

export const updateProfilePicture = createAsyncThunk(
  "profilePicture/update",
  async ({ userId, uri }: { userId: string; uri: string }, { rejectWithValue, dispatch }) => {
    try {
      const res = await fetch(`${API_URL}/user/update-profile-photo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, imageUrl: uri }),
      });

      const data = await res.json();
      if (!res.ok) {
        return rejectWithValue(data.message);
      }

      // Update AsyncStorage globally
      const user = await AsyncStorage.getItem("user");
      if (user) {
        const updatedUser = { ...JSON.parse(user), user: { ...JSON.parse(user).user, photo: uri } };
        dispatch(updateUserInAsyncStorage(updatedUser));
      }

      return data.message;
    } catch (error) {
      return rejectWithValue("Failed to update profile picture");
    }
  }
);

const profilePictureSlice = createSlice({
  name: "profilePicture",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateProfilePicture.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(updateProfilePicture.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
    });
    builder.addCase(updateProfilePicture.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const profilePictureReducer = profilePictureSlice.reducer;

// dispatch(updateProfilePicture({ userId: user.id, uri: "new-image-url" }));