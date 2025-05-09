import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BackendURL } from '../../src/Components/Functions';

export const fetchWallet = createAsyncThunk(
  'wallet/fetchWallet',
  async (userId) => {
    const response = await fetch(`${BackendURL}/wallets/user/${userId}`);
    const data = await response.json();
    return data;
  }
);


const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    balance: 0,
    rewards: 0,
    transactions: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWallet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWallet.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload.balance;
        state.rewards = action.payload.rewards;
        state.transactions = action.payload.transactions;
      })
      .addCase(fetchWallet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export const { deposit, withdraw } = walletSlice.actions;
export default walletSlice.reducer;
