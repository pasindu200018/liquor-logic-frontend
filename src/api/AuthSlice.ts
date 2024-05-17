import { AUTH_URL } from "../constants/api";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        login: builder.mutation({
            query: (data)=>({
                url:`${AUTH_URL}/login`,
                method: "POST",
                body: data,
            })
        }),
        register: (builder.mutation)({
            query: (data)=>({
                url:`${AUTH_URL}/register`,
                method: "POST",
                body: data,
            })
        })
    })
})

export const { useLoginMutation } = authApiSlice 