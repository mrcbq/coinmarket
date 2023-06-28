import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.coinstats.app/public/v1/coins';

export const getCoins = createAsyncThunk('coins/getCoins', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const initialState = {
  coins: [],
  status: 'idle',
  error: null,
};

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoins.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getCoins.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.coins = action.payload.coins;
    });
    builder.addCase(getCoins.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message;
    });
  },
});

export default coinsSlice.reducer;
