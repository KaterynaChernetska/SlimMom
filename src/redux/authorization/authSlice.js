import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerNewUser, refreshUser } from './authOperations';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  userName: '',
  userEmail: '',
  token: null,
  isRefreshing: false,
  user: { username: null, email: null },

};

const authSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: builder => {
    builder
      // ----- SignUp -----
      .addCase(registerNewUser.pending, pendingHandler)
      .addCase(registerNewUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userName = action.payload.username;
        state.userEmail = action.payload.email;
      })
      .addCase(registerNewUser.rejected, rejectHandler)
      // ----- LogIn -----
      .addCase(loginUser.pending, pendingHandler)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userName = action.payload.user.username;
        state.userEmail = action.payload.user.email;
        state.token = action.payload.accessToken;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })

      .addCase(loginUser.rejected, rejectHandler)
      // ----- Logout -----
      .addCase(logoutUser.pending, pendingHandler)
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.userName = '';
        state.userEmail = '';
        state.token = null;
      })
      .addCase(logoutUser.rejected, rejectHandler);
  }
});

function pendingHandler(state) {
  state.error = null;
  state.isLoading = true;
}
function rejectHandler(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const authReducer = (authSlice.reducer);
