import { createSlice } from '@reduxjs/toolkit'

const auth = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true
    },
  },
})

export const { logIn } = auth.actions
export default auth.reducer
