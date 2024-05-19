// import { AUTH_URL } from "../constants/api";
import { API } from "../constants/api";
import { apiSlice } from "./apiSlice";



export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        login: builder.mutation({
            query: (data)=>({
                url:`https://664a1aaaa300e8795d40ff3c.mockapi.io/user`,
                method: "POST",
                body: data,
            })
        }),
        
        register: (builder.mutation)({
            query: (data)=>({
                url:`https://664a1aaaa300e8795d40ff3c.mockapi.io/user`,
                method: "POST",
                body: data,
            })
        })
    })
})

export const { useLoginMutation, useRegisterMutation } = authApiSlice 