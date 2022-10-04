import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';
import { Brands, Categories } from 'types';



export const shopApi=createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:14345/api/shop",
    }),
    endpoints:(builder)=>({
        fetchBrand:builder.query<Brands[],void>({
            query: () =>`getAllBrands`,
        }),
        fetchCategory:builder.query<Categories[],void>({
           query: () => `getAllCategory`,
        })
    })
})

export const {useFetchBrandQuery,useFetchCategoryQuery}=shopApi