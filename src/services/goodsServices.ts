import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGoods } from "../types";

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
    fetchGetGoods: builder.query<IGoods, string>({
      query: (id) => `product/${id}`,
    }),
    fetchGetSimilarProducts:builder.query<IGoods[],number>({
      query:(categoryId)=>{
        return{
          url:`product/similarProducts?categoryId=${categoryId}`,
          method:"GET"
        }
      }
    })
  }),
});
export const {
  useFetchGoodsQuery,
  useFetchGetGoodsQuery,
  useFetchGoodsCategoryQuery,
  useFetchGetSimilarProductsQuery
} = goodsApi;
