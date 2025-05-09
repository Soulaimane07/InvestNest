import { configureStore } from '@reduxjs/toolkit';
import PropertiesSlice from "./Slices/PropertiesSlice"
import UserSlice from "./Slices/userSlice"
import WalletSlice from "./Slices/walletSlice"


export const store = configureStore({
  reducer: {
    properties: PropertiesSlice,
    user: UserSlice,
    wallet: WalletSlice
  },
});
