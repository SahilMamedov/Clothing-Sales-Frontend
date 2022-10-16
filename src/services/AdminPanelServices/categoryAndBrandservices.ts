import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategoryAndBrand } from 'AdminPanel/types';

export interface UppdateProps{
  Name:string
  id:number
}

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
    tagTypes:['getData'],
    endpoints:(builder)=>({
        fetchGetCategoryAndBrand:builder.query<ICategoryAndBrand,void>({
          providesTags:['getData'],
        query:()=>`/`
        }),
        fetchCreateCategory:builder.mutation<void,{Name:string}>({
          invalidatesTags:['getData'],
          query:(body)=>{
            return{
              url:"createCategory",
              method:"POST",
              body
            }
          }
        }),

        fetchCategoryUpdate:builder.mutation<void,UppdateProps>({
          invalidatesTags:['getData'],
          query:(body)=>{
            return{
              url:"categoryUpdate",
              method:"PUT",
              body
            }
          }
        }),

        fetchRemoveCategory:builder.mutation<void,number>({
          invalidatesTags:['getData'],
          query:(id)=>{
            return{
              url:`removeCategory/${id}`,
              method:"DELETE",
              
            }
          }
        }),
        fetchCreateBrand:builder.mutation<void,{Name:string}>({
          invalidatesTags:['getData'],
          query:(body)=>{
            return{
              url:"createBrand",
              method:"POST",
              body
            }
          }
        }),

        fetchUpdateBrand:builder.mutation<void,UppdateProps>({
          invalidatesTags:['getData'],
          query:(body)=>{
            return{
              url:"brandUpdate",
              method:"PUT",
              body
            }
          }
        }),

        fetchRemoveBrand:builder.mutation<void,number>({
          invalidatesTags:['getData'],
          query:(id)=>{
            return{
              url:`removeBrand/${id}`,
              method:"DELETE",
              
            }
          }
        }),

    })

})

export const
{
useFetchGetCategoryAndBrandQuery,
useFetchCreateCategoryMutation,
useFetchCreateBrandMutation,
useFetchRemoveCategoryMutation,
useFetchRemoveBrandMutation,
useFetchCategoryUpdateMutation,
useFetchUpdateBrandMutation,
}
 = CategoryAndBrand