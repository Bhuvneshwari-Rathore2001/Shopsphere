import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProductState } from '../../types/product';

const initialState: IProductState = {
  product: null,
  loading: false,
  error: null,
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProductDetails',
  async (id: string) => {
    const response = await axios.get(
      `http://localhost:4000/api/v1/product/${id}`
    );
    console.log(response.data);
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.product;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default productSlice.reducer;
