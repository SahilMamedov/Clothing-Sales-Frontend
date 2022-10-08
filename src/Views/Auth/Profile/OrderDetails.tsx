import { useGetOrderDataQuery } from "services/saleServices"
import { Column, Filed, OrderDetailBox, OrderDetailItem } from "./styles"

import dayjs from "dayjs";




export interface Props{
  orderId:number|undefined
}


export const OrderDetails =({orderId}:Props)=>{
  
const {data}= useGetOrderDataQuery(orderId)


console.log(data,"dataaaaaaaaa");

  return(
    <>
    {data?.map((item)=>
    <OrderDetailBox key={item.id}>
    <Column>
    <Filed>
    Fullname:
  </Filed>
  <OrderDetailItem>
    {item.appUser.name} {item.appUser.surname}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    City:
  </Filed>
  <OrderDetailItem>
    {item.city}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    Street Address:
  </Filed>
  <OrderDetailItem>
    {item.address}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    Apartment:
  </Filed>
  <OrderDetailItem>
    {item.apartment}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    Phone:
  </Filed>
  <OrderDetailItem>
   {item.mobile}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    Email:
  </Filed>
  <OrderDetailItem>
    {item.appUser.email}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    Payment method:
  </Filed>
  <OrderDetailItem>
    {item.cash?"Cash on delivery":"Direct bank transfer"}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
  Date of Order:
  </Filed>
  <OrderDetailItem>
    {dayjs(`${item.createdAt}`).format("DD.MM.YYYY HH:m")}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    Note:
  </Filed>
  <OrderDetailItem>
   {item.note}
  </OrderDetailItem>
    </Column>
  </OrderDetailBox>
    )}
    </>
  )
}
