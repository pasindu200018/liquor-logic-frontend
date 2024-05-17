import { INVENTORY_URL } from "../constants/api";
import { apiSlice } from "./apiSlice";

export const inventoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllInventory: builder.query({
			query: () => ({
				url: `${INVENTORY_URL}/getAllUsers`,
				method: 'GET',
			}),
		}),
		getAInventory: builder.query({
			query: (Id) => ({
				url: `${INVENTORY_URL}/${Id}`,
				method: 'GET',
			}),
		}),
		
    })
})

export const { useGetAllInventoryQuery, useGetAInventoryQuery } = inventoryApiSlice