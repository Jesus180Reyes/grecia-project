import { configureStore } from '@reduxjs/toolkit'
import {  uploadsSlice } from './uploads/uploadsSlice'


export const store = configureStore({
  reducer: {
    uploads: uploadsSlice.reducer,
    
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
