import { createSlice } from '@reduxjs/toolkit'

const errorSlice = createSlice({
  name: 'error',
  initialState: { currentError: null },
  reducers: {
    newError(state, action) {
      state.currentError = action.payload
    },
    closeError(state, action) {
      state.currentError = null
    },
  },
})

export const errorActions = errorSlice.actions
export default errorSlice.reducer
