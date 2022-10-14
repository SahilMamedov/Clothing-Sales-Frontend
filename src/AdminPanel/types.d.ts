export interface IAdminOrder{
id:number;
date:string;
mobile:number;
total:number;
address:string;
city:string;
firstName:string;
lastName:string;
note:string;
orderStatus:number;
productPhotos:Image[];
cash:boolean;
}
interface Image {
    path:string
}

export interface IProduct{
id:number;
name:string;
price:number;
discount:number;
typename:string;
color:string;
trending:boolean;
photo:{path:string};
brand:{name:string};
category:{name:string}
}

export interface IOneProduct{
    id:number;
    name:string;
    price:number;
    discount:number;
    typename:string;
    color:string;
    trending:boolean;
    productPhotos:[{path:string,id:number}];
    brand:{name:string,id:number};
    category:{name:string,id:number}
    size:[{id:number,sizes:string}]
    }


export interface ICategoryAndBrand{
    brand:[{id:number,name:string}]
    category:[{id:number,name:string}]
}