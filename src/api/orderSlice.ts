import { API } from "../constants/api";
import { apiSlice } from "./apiSlice";


export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query({
			query: () => ({
				url: `https://664a1aaaa300e8795d40ff3c.mockapi.io/order`,
				method: 'GET',
			}),
		}),
		createAOrder: builder.mutation({
			query: (data) => ({
				url: `https://664a1aaaa300e8795d40ff3c.mockapi.io/order`,
				method: 'POST',
				body: data,
			}),
		}),
		
    })
})

export const { useGetAllOrderQuery, useCreateAOrderMutation } = orderApiSlice