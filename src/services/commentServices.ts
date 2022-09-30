import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IComment } from "../types";

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:14345/api/comment",
  }),
  endpoints: (builder) => ({
    commentPost: builder.mutation<void, IComment>({
      query: (body) => {
        return {
          url: "/",
          method: "POST",
          body,
        };
      },
    }),
    getComments: builder.query<IComment[], number|undefined>({
      query: (id: number) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
    removeComment: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useCommentPostMutation,
  useGetCommentsQuery,
  useRemoveCommentMutation,
} = commentApi;
