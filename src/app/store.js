import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carDetails';

export const store = configureStore({
  reducer: {
    car : carReducer
  },
});
