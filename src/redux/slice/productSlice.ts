import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProductState } from '../../types/product';

const initialState: IProductState = {
  products: null,
  productsCount:0,
  resultPerPage:0,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await axios.get(`http://localhost:4000/api/v1/products`, {
      withCredentials: true,
    });
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { products, productsCount, resultPerPage } = action.payload;
        state.loading = false;
        state.products = products;
        state.productsCount = productsCount;
        state.resultPerPage = resultPerPage;


      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default productsSlice.reducer;
