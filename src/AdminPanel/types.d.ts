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