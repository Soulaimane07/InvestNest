import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login(state, action) {
        localStorage.setItem("stake-user", JSON.stringify(action.payload));
        state.user = action.payload;
        console.log("logged in");
    },
    logout(state) {
        localStorage.removeItem("stake-user");
        state.user = null;
        console.log("logged out");
        
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
