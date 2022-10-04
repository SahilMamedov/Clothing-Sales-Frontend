import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';
import { IBlogs } from 'types';

export const blogApi=createApi({
    reducerPath:"blogApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://63146f31fc9dc45cb4ed6c7f.mockapi.io/"
    }),
    endpoints: (builder)=>({
     fetchBlogs: builder.query<IBlogs[],void>({
        query: ()=> `blogs`
     })
    })
})
export const {useFetchBlogsQuery} = blogApi;
