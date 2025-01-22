import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import productsReducer from './slice/productSlice';
import productReducer from './slice/productDetailsSlice';
import cartReducer from './slice/cartSlice';
import paymentReducer from './slice/paymentSlice';



import { TypedUseSelectorHook } from 'react-redux';
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';


const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    payment: paymentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

const useDispatch = () => useAppDispatch<AppDispatch>();

export { dispatch, useDispatch, useSelector, store };
