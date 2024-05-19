import { API } from "../constants/api";
import { apiSlice } from "./apiSlice";

export const inventoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllInventory: builder.query({
			query: () => ({
				url: `https://664a0d96a300e8795d40d457.mockapi.io/inventory`,
				method: 'GET',
			}),
		}),
		createAInventory: builder.mutation({
			query: (data) => ({
				url: `https://664a0d96a300e8795d40d457.mockapi.io/inventory`,
				method: 'GET',
				body:data,
			}),
		}),
		
    })
})

export const { useGetAllInventoryQuery, useCreateAInventoryMutation } = inventoryApiSlice