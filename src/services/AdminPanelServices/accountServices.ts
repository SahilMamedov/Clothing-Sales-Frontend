import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';
import { IToken } from 'types';


export const loginApi=createApi({
    reducerPath:"loginApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:14345/api/AdminAccount",
    }),
    endpoints:(builder)=>({
        fetchLogin:builder.mutation<IToken,FormData>({
            query:(body:FormData)=>{
                return{
                    url:"login",
                    method:"POST",
                    body
                }
            }
        })
    })
    
})
export const {useFetchLoginMutation} = loginApi