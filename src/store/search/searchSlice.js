import { createSlice } from '@reduxjs/toolkit';
import { getCarsThunk } from './seacrhThunk';

const initialState = {
  value: '',
  cars: [],
};

const searchSlice = createSlice({
  name: 'Katya',
  initialState,
  reducers: {
    setValue: (state, {payload}) => {
        state.value = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCarsThunk.fulfilled, (state, {payload}) => {
        state.cars = payload;
    }).addCase(getCarsThunk.rejected, (state, {payload}) => {
        state.value = payload;
    }).addCase(getCarsThunk.pending, (state) => {
        state.value = 'pending'
    })
  }
});

export const {setValue} = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
