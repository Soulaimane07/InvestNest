import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BackendURL } from '../../src/Components/Functions';

export const fetchGoal = createAsyncThunk(
  'goal/fetchGoal',
  async (userId) => {
    const response = await fetch(`${BackendURL}/goals/user/${userId}`);
    const data = await response.json();
    return data;
  }
);


const goalSlice = createSlice({
  name: 'goal',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGoal.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload.balance;
        state.rewards = action.payload.rewards;
        state.transactions = action.payload.transactions;
      })
      .addCase(fetchGoal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export const { deposit, withdraw } = goalSlice.actions;
export default goalSlice.reducer;
