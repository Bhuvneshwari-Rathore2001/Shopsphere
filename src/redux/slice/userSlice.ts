import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUserState } from '../../types/user';

const initialState: IUserState = {
  user: null,
  loading: false,
  isAuthenticated: false,
  // isUserLoggedIn:false,
  error: null,
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await axios.get(`http://localhost:4000/api/v1/me`, {
    withCredentials: true,
  });
  console.log(response.data.user)
  return response.data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserState:(state)=>{
      state.user = null;
      state.isAuthenticated = false;
    },
    updateUserState:(state,action)=>{
      state.user = action.payload
      state.isAuthenticated = true;
    }

    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default userSlice.reducer;
export const { resetUserState, updateUserState } = userSlice.actions;
