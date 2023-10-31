import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { campsiteReducer } from '../features/campsites/campsitesSlice';


export const store = configureStore({
  reducer: {
    campsites: campsiteReducer
  }
});
