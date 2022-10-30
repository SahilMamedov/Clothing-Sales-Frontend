import { useGetOrderDataQuery } from "services/saleServices"
import { Column, Filed, OrderDetailBox, OrderDetailItem } from "./styles"
import {useTranslation} from "react-i18next"
import dayjs from "dayjs";
import { t } from "i18next";




export interface Props{
  orderId:number|undefined
}


export const OrderDetails =({orderId}:Props)=>{
  
const {t} = useTranslation()

const {data}= useGetOrderDataQuery(orderId)



  return(
    <>
    {data?.map((item)=>
    <OrderDetailBox key={item.id}>
    <Column>
    <Filed>
    {t('FullName')}:
  </Filed>
  <OrderDetailItem>
    {item.appUser.name} {item.appUser.surname}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    {t('City')}:
  </Filed>
  <OrderDetailItem>
    {item.city}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    {t('StreetAddress')}:
  </Filed>
  <OrderDetailItem>
    {item.address}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    {t('Apartment')}:
  </Filed>
  <OrderDetailItem>
    {item.apartment}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    {t('Phone')}:
  </Filed>
  <OrderDetailItem>
   {item.mobile}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    {t('Email')}:
  </Filed>
  <OrderDetailItem>
    {item.appUser.email}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    {t('PaymentMethod')}:
  </Filed>
  <OrderDetailItem>
    {item.cash?"Cash on delivery":"Direct bank transfer"}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
  {t('DateOfOrder')}:
  </Filed>
  <OrderDetailItem>
    {dayjs(`${item.createdAt}`).format("DD.MM.YYYY HH:m")}
  </OrderDetailItem>
    </Column>
    <Column>
    <Filed>
    {t('Note')}:
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
