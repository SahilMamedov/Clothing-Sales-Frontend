import { IOrder, IOrderData, IOrderItem, ISaleTypes } from './../types/index.d';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const saleApi=createApi({
    reducerPath:"saleApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:14345/api/sale",
        prepareHeaders: (headers, { getState }) => {
            const token =localStorage.getItem("token")
            if(token){
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers
        }
    }),
    endpoints:(builder)=>({
    startSale:builder.mutation<void,FormData>({
        query:(body)=> {
            return{
                url:"/",
                method:"POST",
                body,
            }
        }
    }),
    getOrderAll:builder.query<IOrder[],void>({
        query: () => `/getOrderAll`,
    }),

    getOrderItemAll:builder.query<IOrderItem[],number|undefined>({

        query:(orderId)=> {
            return{
            url:`getOrderItemAll?orderid=${orderId}`,
            method:"GET"
            }
        }
       
        
    }),

    getOrderData:builder.query<IOrderData[],number|undefined>({
        query:(orderId)=>{
            return{
                url:`getOrder?orderid=${orderId}`,
                method:"GET"
            }
        }
    })

    })
})

export const 
 {  useStartSaleMutation,
    useGetOrderAllQuery,
    useGetOrderItemAllQuery,
    useGetOrderDataQuery 
}=saleApi;