import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const crimeApi = createApi({
    reducerPath: 'crimeApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/'}),
    tagTypes: ['Crimes'],
    endpoints: (builder) => ({

        getCrimes: builder.query({
            query: () => 'crimes',
            providesTags: ['Crimes']
        }),

        getCrimeByID: builder.query({
            query: (CrimeID) => `crime/${CrimeID}`,
            providesTags: ['Crimes']
        }),

        deleteCrime: builder.mutation({
            query: (CrimeID) => ({
                url: `crime/${CrimeID}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Crimes']
        }),

        addCrime: builder.mutation({
            query: (crime) => ({
                url: 'crime/add',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Crimes']
        }),

        updateCrime: builder.mutation({
            query: (crime)=>({
                url:`crime/update/${crime.CrimeID}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Crimes']
        }),
    })
})

export const {
    useGetCrimesQuery,
    useGetCrimeByIDQuery,
    useDeleteCrimeMutation,
    useAddCrimeMutation,
    useUpdateCrimeMutation
} = crimeApi;