
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';
import { Brands, Categories, IFilterProduc, IGoods, IReturnFilterProduct } from 'types';

export interface IReturnSearch{
result:IGoods[]
}

export interface ISearch{
    search:string;
}
const funcQueryParams=(Product:IFilterProduc)=>{

    const brandId=`${Product.brandIds?.map((item) => `brandIds=${item}&`)}`
    .split(",")
    .join("");
    
    const categoryId=`${Product.categoryIds?.map((item) => `categoryIds=${item}&`)}`
    .split(",")
    .join("");

    return `/filter?${brandId}&${categoryId}&minPrice=${Product.minPrice}&maxPrice=${Product.maxPrice}&page=${Product.page}`
}


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
        }),

        fetchFilterProduct:builder.query<IReturnFilterProduct,IFilterProduc>({
            query:(obj)=>funcQueryParams(obj)
        }),

        fetchSearch:builder.mutation<IReturnSearch,ISearch>({
            query:(search)=>{
                
                return{
                    url:`?search=${search}`,
                    method:"POST",
                }
            }
        })
    })
})

export const {useFetchBrandQuery,useFetchCategoryQuery,useFetchFilterProductQuery,useFetchSearchMutation}=shopApi