import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import slideReducer from './features/slider/sliderSlice';

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      slider: slideReducer,
  },
})