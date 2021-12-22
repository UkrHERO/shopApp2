import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getProducts,
  deleteProduct,
  setProduct,
  getProductById,
  editProductById,
} from './products-operations';

const items = createReducer([], {
  [getProducts.fulfilled]: (state, { payload }) => payload,
  [setProduct.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteProduct.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [getProductById.fulfilled]: (state, { payload }) => payload,
  [editProductById.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
});

export default combineReducers({
  items,
});
