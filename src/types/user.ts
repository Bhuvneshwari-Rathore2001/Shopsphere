
export type IAvatar = {
  public_id: string;
  url: string;
};
export type IUser = {
  avatar: IAvatar;
  _id: string;
  name: string;
  email: string;
  role: "Owner"|"Admin"|"User";
  createdAt: string;
};


