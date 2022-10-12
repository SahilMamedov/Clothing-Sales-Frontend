

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
            
            return {
              url: `?ProductId=${item?.ProductId}&count=${item.Count}`,
              method: "POST",
              
            };
          },
        }),

        deleteItem: builder.mutation<{ total: number }, number>({
          query: (id) => {
            return {
              url: `/${id}`,
              method: "DELETE",
            };
          },
        }),
    })
    
})
export const extendedApi = basketApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBasket: build.query<Basket, void>({
      query: () => `/`,
    }),
  }),
});
export const { useGetAllBasketQuery } = extendedApi;



export const {useAddItemMutation,useDeleteItemMutation} = basketApi;