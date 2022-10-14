
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategoryAndBrand, IOneProduct, IProduct } from 'AdminPanel/types';



// export interface Props{
//     brand:[{id:number,name:string}]
//     category:[{id:number,name:string}]
// }


export const productApi=createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:14345/api/adminProduct",
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("Admintoken");
            if (token) {
              headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
          },
    }),
    tagTypes: ['DeletAndGet','createAndGet','updateAndGet'],
    endpoints:(builder)=>({

    fetchBrandAndCategory:builder.query<ICategoryAndBrand,void>({
        
    query:()=>`/brandAndCategory`
}),

fetchCreateProduct:builder.mutation<void,FormData>({
invalidatesTags:['createAndGet'],
    query:(body:FormData)=>{
        return{
            url:"createProduct",
            method:"POST",
            body
        }
    }
}),

fetchGetAllProduct:builder.query<IProduct[],void>({
    providesTags:["DeletAndGet",'createAndGet','updateAndGet'],
query:()=>`getAll`
}),

fetchDeletProduct:builder.mutation<void,number>({
    invalidatesTags:["DeletAndGet"],
query:(id)=>{
    return{
        url:`delete?id=${id}`,
        method:"DELETE",
    }
}
}),
fetchGetOneProduct:builder.query<IOneProduct,number>({
query:(id)=>`/getOne?id=${id}`
}),
fetchUpdateProduct:builder.mutation<void,FormData>({
    invalidatesTags:['updateAndGet'],
    query:(body)=>{
        return{
            url:"updateProduct",
            method:"PUT",
            body,
        }
    }
})
    }),
   

})

export const {
useFetchBrandAndCategoryQuery,
useFetchCreateProductMutation,
useFetchGetAllProductQuery,
useFetchDeletProductMutation,
useFetchGetOneProductQuery,
useFetchUpdateProductMutation
}=productApi