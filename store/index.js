import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import errorSlice from './errorSlice'
const store = configureStore({
  reducer: {
    auth: authSlice,
    error: errorSlice,
  },
})

export default store
