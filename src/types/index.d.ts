export interface IGoods {
  id: number;
  name: string;
  brand: any;
  brandName: string;
  price: number;
  trending: boolean;
  discount: number;
  typeName: string;
  isMainPhoto: string;
  discountPrice: number;
  photoPath: string;
  productPhotos: any[];
  color: string;
}
export interface IBlogs {
  id: string;
  Name: string;
  Title: string;
  Desc: string;
  ImgUrl: string;
}
export interface IToken {
  token: string;
}
export interface IRegister {
  name: string;
  surName: string;
  email: string;
  password: string;
}

export interface IUser {
  nameid: string;
  Name: string;
  Surname: string;
  Email?: string;
  IsOnline?: boolean;
}
export interface AppUser {
  name: string;
  surname: string;
  userId:string;
}
export interface IComment {
  id:number;
  appUserId: string;
  ProductId: number|undefined
  content: any[];
  appUser?: AppUser;
  name?: string;
  surname?: string;
}
export interface IBasketItem {
  id: number;
  productId: number;
  product?: IGoods;
  sum: number;
  price: number;
  path: string;
  count: number;
}
export interface Basket {
  basketItems: IBasketItem[];
  total: number;
}
export interface Brands{
  id:number,
  name:string
}
export interface Categories{
  id:number;
  name:string;
}

export interface ISaleTypes{
  firstName?:string;
  lastName?:string;
  email:string;
  address:string;
  mobile:number;
  apartment:string;
  city:string;
  payment:boolean;
  note?:string;
}
export interface IOrder{
  id:number;
  date:string;
  orderStatus:number;
  total:number;
}
export interface IOrderData{

}