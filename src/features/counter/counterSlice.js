import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  addCart: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      if (state.value === 0) {
          state.value = 0;
      } else {
        state.value -= 1
      }
    },

    purchase: (state) => {
      state.addCart = true;
    },

    removeItem: (state) => {
      state.addCart = false;
      state.value = 0;
    }
  },
})

export const { increment, decrement, purchase, removeItem } = counterSlice.actions
export default counterSlice.reducer