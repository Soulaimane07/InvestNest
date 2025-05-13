import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Mock API calls
export const fetchProperties = createAsyncThunk("properties/fetchProperties", async () => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: 1,
      title: "2 Bed Studio One Tower",
      location: "Dubai",
      price: 1234000,
      totalInvestors: 45,
      annualReturn: 8.4,
      fundedDate: "2023-05-15",
      purchasePrice: 1150000,
      totalRentalIncome: 125000,
      description:
        "A luxurious 2-bedroom apartment in the prestigious Studio One Tower. This property offers stunning views of the Dubai skyline and is located in a prime area with excellent rental potential.",
      features: ["2 Bedrooms", "2 Bathrooms", "Fully Furnished", "Balcony", "Swimming Pool", "Gym", "24/7 Security"],
      listImages: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ],
    },
    {
      id: 2,
      title: "Boulevard Point Downtown",
      location: "Dubai",
      price: 2450000,
      totalInvestors: 78,
      annualReturn: 10.4,
      fundedDate: "2023-06-22",
      purchasePrice: 2300000,
      totalRentalIncome: 210000,
      description:
        "A premium apartment in the heart of Downtown Dubai with stunning views of Burj Khalifa. This property offers excellent rental yields and capital appreciation potential.",
      features: ["3 Bedrooms", "3 Bathrooms", "Fully Furnished", "Balcony", "Swimming Pool", "Gym", "24/7 Security"],
      listImages: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ],
    },
    {
      id: 3,
      title: "Marina Arcade",
      location: "Dubai",
      price: 1850000,
      totalInvestors: 62,
      annualReturn: 9.2,
      fundedDate: "2023-07-10",
      purchasePrice: 1750000,
      totalRentalIncome: 165000,
      description:
        "A modern apartment in the vibrant Dubai Marina district. This property offers excellent rental yields and is in high demand among expatriates.",
      features: ["2 Bedrooms", "2 Bathrooms", "Fully Furnished", "Balcony", "Swimming Pool", "Gym", "24/7 Security"],
      listImages: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ],
    },
  ]
})

export const fetchSavedProperties = createAsyncThunk("properties/fetchSavedProperties", async (userId) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [1, 3] // Property IDs that are saved
})

export const fetchLikedProperties = createAsyncThunk("properties/fetchLikedProperties", async (userId) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [2] // Property IDs that are liked
})

export const fetchDeals = createAsyncThunk("properties/fetchDeals", async (userId) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: 1,
      propertyId: 1,
      investmentAmount: 5000,
      investmentDate: "2023-05-20",
      returns: 450,
    },
    {
      id: 2,
      propertyId: 2,
      investmentAmount: 10000,
      investmentDate: "2023-06-25",
      returns: 1040,
    },
  ]
})

const initialState = {
  list: [],
  saved: [],
  liked: [],
  deals: [],
  loading: false,
  error: null,
}

export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    toggleSaved: (state, action) => {
      const propertyId = action.payload
      if (state.saved.includes(propertyId)) {
        state.saved = state.saved.filter((id) => id !== propertyId)
      } else {
        state.saved.push(propertyId)
      }
    },
    toggleLiked: (state, action) => {
      const propertyId = action.payload
      if (state.liked.includes(propertyId)) {
        state.liked = state.liked.filter((id) => id !== propertyId)
      } else {
        state.liked.push(propertyId)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(fetchSavedProperties.fulfilled, (state, action) => {
        state.saved = action.payload
      })
      .addCase(fetchLikedProperties.fulfilled, (state, action) => {
        state.liked = action.payload
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.deals = action.payload
      })
  },
})

export const { toggleSaved, toggleLiked } = propertiesSlice.actions
export default propertiesSlice.reducer
