import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBlogs, IGoods } from "../types";

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63146f31fc9dc45cb4ed6c7f.mockapi.io/",
  }),
  endpoints: (builder) => ({
    fetchGoods: builder.query<IGoods[], void>({
      query: () => `goods`,
    }),
    fetchBlogs: builder.query<IBlogs[], void>({
      query: () => `blogs`,
    }),
    fetchGetGoods: builder.query<IGoods, string>({
      query: (id) => `goods/${id}`,
    }),
  }),
});
export const { useFetchGoodsQuery, useFetchBlogsQuery, useFetchGetGoodsQuery } =
  goodsApi;
