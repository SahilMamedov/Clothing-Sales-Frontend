

import { IAdminOrder } from './../../AdminPanel/types.d';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOrderItem } from 'types';

export interface Props{
    orderId:number;
    orderStatus:number;
}
export const saleAdminApi= createApi({
    reducerPath:"saleAdminApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:14345/api/Adminsale",
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("Admintoken");
            if (token) {
              headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
          },
    }),
    endpoints:(builder)=>({
        fetchGetAllOrder:builder.query<IAdminOrder[],void>({
            query: () => `allOrder`,
        }),
        fetchGetAllOrderItems:builder.query<IOrderItem[],number>({
            query:(orderId)=>`OrderItem?orderid=${orderId}`
        }),
        fetchUpdateOrder:builder.mutation<void,Props>({
            query:({orderId,orderStatus})=>{
                return{
                    url:`?orderId=${orderId}&orderStatus=${orderStatus}`,
                    method:"PUT"
                }
            }
        })
    })
})

export const {useFetchGetAllOrderQuery,useFetchGetAllOrderItemsQuery,useFetchUpdateOrderMutation} = saleAdminApi