import { configureStore } from '@reduxjs/toolkit';
import PropertiesSlice from "./Slices/PropertiesSlice"
import UserSlice from "./Slices/userSlice"


export const store = configureStore({
  reducer: {
    properties: PropertiesSlice,
    user: UserSlice
  },
});
