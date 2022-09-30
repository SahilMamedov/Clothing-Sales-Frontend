import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBlogs, IGoods } from "../types";

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:14345/api/",
  }),
  endpoints: (builder) => ({
    fetchGoods: builder.query<IGoods[], void>({
      query: () => `product`,
    }),
    fetchGoodsCategory: builder.query<IGoods[], string | undefined>({
      query: (ctr) => `product?typeName=${ctr}`,
    }),
    fetchBlogs: builder.query<IBlogs[], void>({
      query: () => `blogs`,
    }),
    fetchGetGoods: builder.query<IGoods, string>({
      query: (id) => `product/${id}`,
    }),
  }),
});
export const {
  useFetchGoodsQuery,
  useFetchBlogsQuery,
  useFetchGetGoodsQuery,
  useFetchGoodsCategoryQuery,
} = goodsApi;
