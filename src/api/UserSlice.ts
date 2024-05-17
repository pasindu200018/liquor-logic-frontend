import { USER_URL } from '../constants/api'
import { apiSlice } from './apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({

		getAllUser: builder.query({
			query: () => ({
				url: `${USER_URL}/getAllUsers`,
				method: 'GET',
			}),
		}),
		getAUser: builder.query({
			query: (ID) => ({
				url: `${USER_URL}/${ID}`,
				method: 'GET',
			}),
		}),
        
	}),
})

export const { useGetAllUserQuery, useGetAUserQuery } = authApiSlice
