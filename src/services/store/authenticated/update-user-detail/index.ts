import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "../../store";
const API_URL = process.env.API_URL
const initialState = {
  updatingIsLoading: false,
  error: false,
  message: '',
  isUpdated: false,
}
export type updateUserState = typeof initialState


export const updateUserProfilePictureHandler = createAsyncThunk<any, { userId: string, uri: string }, { rejectValue: string, state: RootState }>('post/uodate-user-profile-picture', async ({ userId, uri }, { rejectWithValue, dispatch }) => {
  try {
    const res = await fetch(`${API_URL}/user/update-profile-photo`, {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        "userId": userId,
        "imageUrl": uri
      })
    })
    const data = await res.json()
    if (!res.ok) {
      return rejectWithValue(data.message)
    }
    const accessAsyncStorage = await AsyncStorage.getItem('user')
    if (accessAsyncStorage) {
      const currentUser = JSON.parse(accessAsyncStorage)
      currentUser.user.photo = uri
      await AsyncStorage.setItem('user', JSON.stringify(currentUser))
    }
    return data.message
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message)
    }
  }
})

const updateUserSlice = createSlice({
  name: 'update-user',
  initialState,
  reducers: {
    setIsUpdatedFalse: (state) => {
      state.isUpdated = false
    }
  },
  extraReducers(builder) {
    builder.addCase(updateUserProfilePictureHandler.pending, (state, action) => {
      state.updatingIsLoading = true
      state.isUpdated = false
      state.error = false
      state.message = ''

    })
    builder.addCase(updateUserProfilePictureHandler.fulfilled, (state, action) => {
      state.updatingIsLoading = false
      state.isUpdated = true
      state.error = false
      state.message = action.payload
    })
    builder.addCase(updateUserProfilePictureHandler.rejected, (state, action) => {
      state.updatingIsLoading = false
      state.isUpdated = false
      state.error = true
      state.message = action.payload ? action.payload : 'unable to cancel your request at this time'
    })
  },
})
export const updateUserReducer = updateUserSlice.reducer
export const { setIsUpdatedFalse } = updateUserSlice.actions