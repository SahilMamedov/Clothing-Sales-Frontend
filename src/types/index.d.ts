export interface IGoods {
  id: string;
  Name: string;
  BrandName: string;
  Price: number;
  Trending: boolean;
  Discount: number;
  ProductImgUrl: string[];
  TypeName: string;
  isMainImg: string;
  Size: string[];
  Colors: string[];
}
export interface IBlogs {
  id: string;
  Name: string;
  Title: string;
  Desc: string;
  ImgUrl: string;
}
export interface IToken {
  token?: string;
}
export interface IRegister {
  name: string;
  surName: string;
  email: string;
  password: string;
}
export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  Name: string;
  Surname: string;
  Email?: string;
  IsOnline?: boolean;
}
