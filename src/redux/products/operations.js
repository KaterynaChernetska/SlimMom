import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProductsByDate = createAsyncThunk(
  'products/getByDate',
  async (date, thunkAPI) => {
    try {
      const { data } = await axios.get(`https://slimmom-backend.goit.global/daily?date=${date}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductsByTitle = createAsyncThunk(
  'products/fetchAll',
  async (title, thunkAPI) => {
    try {
      const { data } = await axios.get(`https://slimmom-backend.goit.global/products?product=${title}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addEatedProduct = createAsyncThunk(
  'products/addEatedProduct',
  async (product, thunkAPI) => {
    try {
      const { data } = await axios.post('https://slimmom-backend.goit.global/daily/addeated', product);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeEatedProduct = createAsyncThunk(
  'products/removeEatedProduct',
  async (idToRemove, thunkAPI) => {
    try {
      const { data } = await axios.delete(`https://slimmom-backend.goit.global/daily/${idToRemove}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



