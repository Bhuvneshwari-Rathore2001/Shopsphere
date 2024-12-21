export type IImage = {
  public_id: string;
  url: string;
  _id: string;
};

export type IProduct = {
  _id: string;
  images: IImage[];
  name: string;
  description: string;
  price: number;
  ratings: number;
  category: string;
  stock: number;
  numOfReviews: number;
  user: string;
  reviews: string[];
  createdAt: string;
};
