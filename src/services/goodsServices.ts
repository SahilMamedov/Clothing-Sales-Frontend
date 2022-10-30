import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGoods } from "../types";

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:14345/api/product",
  }),
  endpoints: (builder) => ({
    fetchGoods: builder.query<IGoods[], void>({
      query: () => `/`,
    }),
    fetchGoodsCategory: builder.query<IGoods[], string | undefined>({
      query: (ctr) => `?typeName=${ctr}`,
    }),
    fetchGetGoods: builder.query<IGoods, string>({
      query: (id) => `/${id}`,
    }),
    fetchGetSimilarProducts:builder.query<IGoods[],number>({
      query:(categoryId)=>{
        return{
          url:`similarProducts?categoryId=${categoryId}`,
          method:"GET"
        }
      }
    }),
    fetchNewArrivalGoods:builder.query<IGoods[],void>({
      query:()=>{
        return{
          url:"newArrivalGoods",
          method:'GET'
        }
      }
    })
  }),
});
export const {
  useFetchGoodsQuery,
  useFetchGetGoodsQuery,
  useFetchGoodsCategoryQuery,
  useFetchGetSimilarProductsQuery,
  useFetchNewArrivalGoodsQuery
} = goodsApi;
