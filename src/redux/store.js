import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/products-reducer';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
});
