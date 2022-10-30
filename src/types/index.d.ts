export interface IGoods {
  id: number;
  name: string;
  brand: Brands;
  category:Category;
  price: number;
  trending: boolean;
  discount: number;
  typeName: string;
  isMainImage: string;
  discountPrice: number;
  photoPath: string;
  productPhotos:IProductImage[]
  productPhotos: any[];
  color: string;
  size:[{id:number,sizes:string}]
}
export interface Category{
  id:number,
  name:string
}
export interface IProductImage{
  id:number;
  path:string;
  isMain:boolean;

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
  unique_name:string
  IsOnline?: boolean;
  Role:[]
}
export interface AppUser {
  name: string;
  surname: string;
  userId:string;
  email:string;
}
export interface IComment {
  id:number;
  appUserId: string;
  ProductId: number|undefined
  content: any[];
  appUser?: AppUser;
  name?: string;
  surname?: string;
  createTime:string;
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
id:number;
address:string;
note:string;
apartment:string;
mobile:number;
city:string;
appUser:AppUser;
cash:boolean;
createdAt:string;
// firstName:string;
// lastName:string;
// email:string;
}

export interface IFilterProduc{
  brandIds?:number[];
  categoryIds?:number[];
  maxPrice?:number;
  minPrice?:number;
  page:number;
  typeName:string |undefined;
  
  }
  
export interface IOrderItem{
id:number;
name:string;
count:number;
total:number;
color:string;
photo:{path:string}
}

export interface IReturnFilterProduct{
  result: Goods[];
  totalCount: number;
}
