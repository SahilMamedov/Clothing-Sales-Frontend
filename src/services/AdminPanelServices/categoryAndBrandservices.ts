import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategoryAndBrand } from 'AdminPanel/types';

export const CategoryAndBrand=createApi({
    reducerPath:"categoryAndBrand",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:14345/api/AdminCategoryAndBrand",
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("Admintoken");
            if (token) {
              headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
          },
          
    }),
    endpoints:(builder)=>({
        fetchGetCategoryAndBrand:builder.query<ICategoryAndBrand,void>({
        query:()=>`/`
        })
    })
})

export const {useFetchGetCategoryAndBrandQuery} = CategoryAndBrand