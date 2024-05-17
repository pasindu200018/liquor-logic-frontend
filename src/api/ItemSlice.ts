import { ITEM_URL } from "../constants/api";
import { apiSlice } from "./apiSlice";


export const itemApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllItem: builder.query({
			query: () => ({
				url: `${ITEM_URL}/getAllUsers`,
				method: 'GET',
			}),
		}),
		getAItem: builder.query({
			query: (Id) => ({
				url: `${ITEM_URL}/${Id}`,
				method: 'GET',
			}),
		}),
		
    })
})

export const { useGetAllItemQuery } = itemApiSlice