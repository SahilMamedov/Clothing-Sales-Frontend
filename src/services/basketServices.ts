
import { fetchBaseQuery,createApi } from '@reduxjs/toolkit/query/react';
import { Basket } from 'types';
export interface Props{
    ProductId:number;
    Count:number;
}
export const basketApi= createApi({
    reducerPath: "basketApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:14345/api/basket",
        prepareHeaders: (headers, { getState }) => {
            const token =localStorage.getItem("token")
            if(token){
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
  
        addItem: builder.mutation<Basket, Props>({
          query: (item) => {
            console.log(item,"item id")
            return {
              url: `?ProductId=${item?.ProductId}&count=${item.Count}`,
              method: "POST",
              
            };
           
            
          },
        }),
    
    })
})

export const {useAddItemMutation} = basketApi;