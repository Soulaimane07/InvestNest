import { createSlice } from "@reduxjs/toolkit"
import Language from "../../assets/Language.json"
import AsyncStorage from "@react-native-async-storage/async-storage"

const initialState = {
  user: null,
  language: Language.english,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
    langChange: (state) => {
      if (state.language.subTitle === "en") {
        state.language = Language.french
      } else {
        state.language = Language.english
      }
      AsyncStorage.setItem("stake-lang", state.language.subTitle)
    },
    setLang: (state, action) => {
      if (action.payload === "en") {
        state.language = Language.english
      } else if (action.payload === "fr") {
        state.language = Language.french
      } else {
        state.language = Language.english
      }
    },
  },
})

export const { login, logout, langChange, setLang } = userSlice.actions
export default userSlice.reducer
