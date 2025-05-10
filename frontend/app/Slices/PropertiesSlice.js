import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BackendURL } from '../../src/Components/Functions';

export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async () => {
    const response = await fetch(`${BackendURL}/properties`);
    const data = await response.json();
    return data;
  }
);

export const fetchSavedProperties = createAsyncThunk(
  'properties/fetchSavedProperties',
  async (userId) => {
    const response = await fetch(`${BackendURL}/savedProperties/user/${userId}`);
    const data = await response.json();
    return data;
  }
);

export const fetchLikedProperties = createAsyncThunk(
  'properties/fetchLikedProperties',
  async (userId) => {
    const response = await fetch(`${BackendURL}/likedProperties/user/${userId}`);
    const data = await response.json();
    return data;
  }
);

export const fetchDeals = createAsyncThunk(
  'deals/fetchDeals',
  async (userId) => {
    const response = await fetch(`${BackendURL}/deals/user/${userId}`);
    const data = await response.json();
    return data;
  }
);



const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    data: [],
    saved: [],
    liked: [],
    deals: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      

      .addCase(fetchSavedProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSavedProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.saved = action.payload;
      })
      .addCase(fetchSavedProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      

      .addCase(fetchLikedProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLikedProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.liked = action.payload;
      })
      .addCase(fetchLikedProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchDeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.loading = false;
        state.deals = action.payload;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });


  },
});

export default propertiesSlice.reducer;
