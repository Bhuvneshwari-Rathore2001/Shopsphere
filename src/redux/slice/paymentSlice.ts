import { createSlice } from '@reduxjs/toolkit';

interface PaymentState {
  loading: boolean;
  secretKey: string | null;
  error: string | null;
}

const initialState: PaymentState = {
  loading: false,
  secretKey: null,
  error: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default paymentSlice.reducer;
