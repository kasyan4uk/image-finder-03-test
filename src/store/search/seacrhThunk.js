import axios from "axios";
const { createAsyncThunk } = require('@reduxjs/toolkit');

axios.defaults.baseURL = 'https://65095ce3f6553137159b46b9.mockapi.io';

export const getCarsThunk = createAsyncThunk(
  'cars/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/CarRental');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
