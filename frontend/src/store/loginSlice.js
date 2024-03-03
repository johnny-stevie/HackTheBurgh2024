import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: localStorage.getItem("bioCinoXEmail")
    ? JSON.parse(localStorage.getItem("bioCinoXEmail") || "")
    : null,
  },
  reducers: {
    setLogin: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {...state,value:action.payload.data}
    }
  }
})

export const { setLogin } = loginSlice.actions