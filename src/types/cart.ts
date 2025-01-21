export type IShippingInfo = {
  address: string;
  country: string;
  state: string;
  city: string;
  pinCode: number;
  phoneNo: number;
};
export type ICart = {
  product: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  quantity: number;
};
export type ICartState = {
  cartItems: ICart[];
  shippingInfo: IShippingInfo;
};
