import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartState } from '../../types/cart';

const initialState: ICartState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems') as string),
  shippingInfo: JSON.parse(localStorage.getItem('shippingInfo') as string),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.product === productId);
      if (item) {
        item.quantity = quantity; // Update quantity
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Persist changes
      }
    },
  },
  extraReducers: () => {},
});

export const { updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
