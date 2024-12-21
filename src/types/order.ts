

export type IUser = {
  id:string,
  email:string,
  name:string
}
export type IOrderItem = {
  name:string;
  price:number;
  quantity:number;
  image:string;
  product:string;
  _id:string;
};

export type IPaymentInfo = {
  id:string;
  status:string;
};
export type IShippingInfo = {
  address:string;
  city:string;
  state:string;
  country:string;
  phoneNo:number;
  pinCode:number;
};

export type IOrder = {
  
  shippingInfo:IShippingInfo,
  paymentInfo:IPaymentInfo,
  _id:string,
  orderItems:IOrderItem[]
  user: IUser;
  paidAt:string;
  itemsPrice:number;
  taxPrice:number;
  shippingPrice:number;
  totalPrice:number;
  orderStatus:"Processing"|"Shipped"|"Delivered";
  createdAt:string;
};

