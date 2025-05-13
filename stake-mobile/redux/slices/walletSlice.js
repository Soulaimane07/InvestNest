import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchWallet = createAsyncThunk("wallet/fetchWallet", async (userId) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    balance: 25000,
    totalInvested: 20000,
    totalReturns: 5000,
    monthlyIncome: 450,
    transactions: [
      {
        id: 1,
        type: "deposit",
        amount: 10000,
        date: "2023-04-15",
        status: "completed",
      },
      {
        id: 2,
        type: "investment",
        amount: 5000,
        propertyId: 1,
        date: "2023-05-20",
        status: "completed",
      },
      {
        id: 3,
        type: "return",
        amount: 450,
        propertyId: 1,
        date: "2023-06-20",
        status: "completed",
      },
    ],
  }
})

const initialState = {
  data: null,
  loading: false,
  error: null,
}

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWallet.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchWallet.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchWallet.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default walletSlice.reducer
