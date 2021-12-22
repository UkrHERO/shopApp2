import { createAsyncThunk } from '@reduxjs/toolkit';
import * as productsAPI from '../../api/api';

export const getProducts = createAsyncThunk(
  'product/get',
  async (_, { rejectWithValue }) => {
    try {
      const products = await productsAPI.getProducts();
      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteProduct = createAsyncThunk(
  'product/delete',
  async (id, { rejectWithValue }) => {
    try {
      const products = await productsAPI.deleteProduct(id);
      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const setProduct = createAsyncThunk(
  'product/add',
  async (all, { rejectWithValue }) => {
    try {
      const products = await productsAPI.setProduct(all);
      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getProductById = createAsyncThunk(
  'product/getId',
  async (id, { rejectWithValue }) => {
    try {
      const products = await productsAPI.getProductById(id);
      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const editProductById = createAsyncThunk(
  'product/edit',
  async (id, { rejectWithValue }) => {
    try {
      const products = await productsAPI.editProductById(id);
      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
