import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRegister } from "../types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/account/",
  }),
  endpoints: (builder) => ({
    fetchRegisters: builder.mutation<any, IRegister>({
      query: (body: IRegister) => {
        return {
          url: "register",
          method: "POST",
          body,
        };
      },
    }),
  }),
});
export const { useFetchRegistersMutation } = authApi;
