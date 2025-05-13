import { configureStore } from "@reduxjs/toolkit"
import propertiesReducer from "./slices/propertiesSlice"
import userReducer from "./slices/userSlice"
import walletReducer from "./slices/walletSlice"

export const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    user: userReducer,
    wallet: walletReducer,
  },
})
