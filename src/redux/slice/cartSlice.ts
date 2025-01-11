import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems') as string),
  shippingInfo: JSON.parse(localStorage.getItem('shippingInfo') as string),
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default cartSlice.reducer;
