import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IToken } from "../types";
export interface IRegister{
  error:string
  data:string
}
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:14345/api/account/",
  }),
  endpoints: (builder) => ({

    fetchRegisters: builder.mutation<IRegister, FormData>({
      query: (body: FormData) => {
        return {
          url: "register",
          method: "POST",
          body,
        };
      },
    }),
    fetchLogin: builder.mutation<IToken, FormData>({
      query: (body) => {
        return {
          url: "login",
          method: "POST",
          body,
        };
      },
    }),
    updateUser: builder.mutation<IToken, FormData>({
      query: (body) => {
        return {
          url: "updateUser",
          method: "PUT",
          body,
        };
      },
    }),
    
  }),
});
export const { useFetchRegistersMutation, useFetchLoginMutation,useUpdateUserMutation } = authApi;
