import { API } from '../constants/api'
import { apiSlice } from './apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({

		getAllUser: builder.query({
			query: () => ({
				url: `https://664a1aaaa300e8795d40ff3c.mockapi.io/user`,
				method: 'GET',
			}),
		}),
		getAUser: builder.query({
			query: (ID) => ({
				url: `https://664a1aaaa300e8795d40ff3c.mockapi.io/user`,
				method: 'GET',
			}),
		}),
		deleteAUser: builder.query({
			query: (ID) => ({
				url: `https://664a1aaaa300e8795d40ff3c.mockapi.io/user`,
				method: 'GET',
			}),
		}),
        
	}),
})

export const { useGetAllUserQuery, useGetAUserQuery } = authApiSlice
