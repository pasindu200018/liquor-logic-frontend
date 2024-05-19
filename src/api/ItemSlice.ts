import { API } from "../constants/api";
import { apiSlice } from "./apiSlice";


export const itemApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllItem: builder.query({
			query: () => ({
				url: `https://664a0d96a300e8795d40d457.mockapi.io/item`,
				method: 'GET',
			}),
		}),
		createAItem: builder.mutation({
			query: (data) => ({
				url: `https://664a0d96a300e8795d40d457.mockapi.io/item`,
				method: 'POST',
				body: data,
			}),
		}),
		
    })
})

export const { useGetAllItemQuery, useCreateAItemMutation } = itemApiSlice