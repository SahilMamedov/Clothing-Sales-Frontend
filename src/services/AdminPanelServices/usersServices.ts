import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRole, IUserAndRole } from 'AdminPanel/types';



export const usersApi=createApi({
    reducerPath:"usersApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:14345/api/adminUser",
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("Admintoken");
            if (token) {
              headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
          },
    }),
    tagTypes:['getUser','getAllRole'],
    endpoints:(builder)=>({
        fetchGetAllUsers:builder.query<IUserAndRole,void>({
            providesTags:['getUser'],
            query:()=>`getAllUser`
        }),
        fetchUpdate:builder.mutation<void,{id:string,role:string}>({
            invalidatesTags:['getUser'],
            query:(body)=>{
                return{
                    url:"updateRole",
                    method:"PUT",
                    body
                }
            }
        }),
        fetchGetAllRole:builder.query<IRole[],void>({
            providesTags:['getAllRole'],
            query:()=>`getAllRole`
        }),
        fetchDeletUser:builder.mutation<void,string>({
            invalidatesTags:['getUser'],
            query:(userId)=>{
                return{
                    url:`userRemove?id=${userId}`,
                    method:"DELETE"
                }
            }
        }),
        fetchCreteRole:builder.mutation<void,string>({
            invalidatesTags:['getAllRole'],
            query:(roleName)=>{
                return{
                    url:`createRole?role=${roleName}`,
                    method:"POST",
                }
            }
        }),
        fetchDeletRole:builder.mutation<void,string>({
            invalidatesTags:['getAllRole'],
            query:(releId)=>{
                return{
                    url:`removeRole?id=${releId}`,
                    method:"DELETE"
                }
            }
        })
    })
})

export const {useFetchGetAllUsersQuery,
useFetchUpdateMutation,
useFetchGetAllRoleQuery,
useFetchDeletUserMutation,
useFetchCreteRoleMutation,
useFetchDeletRoleMutation
} = usersApi