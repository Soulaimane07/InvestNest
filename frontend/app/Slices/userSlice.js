import { createSlice } from '@reduxjs/toolkit';
import Language from "../../public/Language.json"

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    language: Language["english"]
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
    langChange(state) {
      if (state.language.subTitle === "en") {
        state.language = Language["french"]
      } else {
        state.language = Language["english"]
      }
      localStorage.setItem("stake-lang", state.language.subTitle);
    },
    setLang(state, action){
      if (action.payload === "en") {
        state.language = Language["english"]
      } else if (action.payload === "fr") {
        state.language = Language["french"]
      } else {
        state.language = Language["english"]
      }
    }

  },
});

export const { login, logout, langChange, setLang } = userSlice.actions;
export default userSlice.reducer;
