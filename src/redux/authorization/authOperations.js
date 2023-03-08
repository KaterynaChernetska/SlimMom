import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthApi, token, UserApi } from 'services/api';

export const registerNewUser = createAsyncThunk(
  'auth/register',
  async function (credential, thunkAPI) {
    try {
      const result = await AuthApi.registerNewUser(credential);
      thunkAPI.dispatch(
        loginUser({ email: credential.email, password: credential.password })
      );
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    try {
      const result = await AuthApi.loginUser(credential);
      token.set(result.accessToken);
      console.log(result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const result = await AuthApi.logOutUser();
      token.unSet();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const refreshUser = createAsyncThunk(
  'user/',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.userData.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      token.set(persistedToken);
      const { id } = await UserApi.getUserInfo();
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);