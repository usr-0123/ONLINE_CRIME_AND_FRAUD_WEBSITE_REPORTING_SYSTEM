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

        getCrimeByUid: builder.query({
            query: (UserID) => `crime/fetchByUID/${UserID}`,
            providesTags: ['Crimes']
        }),

        deleteCrime: builder.mutation({
            query: (CrimeID) => ({
                url: `crime/delete/${CrimeID}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Crimes']
        }),

        addCrime: builder.mutation({
            query: (crime) => ({
                url: 'crime/add',
                method: 'POST',
                body: crime
            }),
            invalidatesTags: ['Crimes']
        }),

        updateCrime: builder.mutation({
            query: (crime)=>({
                url:`crime/update/${crime.CrimeID}`,
                method: 'PUT',
                body: crime
            }),
            invalidatesTags: ['Crimes']
        }),

        updateCrimeStatus: builder.mutation({
            query: (crime) => ({
                url: `crime/updateStatus/${crime.CrimeID}`,
                method: 'PUT',
                body: crime
            }),
            invalidatesTags: ['Crimes']
        }),

        upload: builder.mutation({
            query: (file) => ({
                url: 'upload-evidense',
                method: 'POST',
                body: file
            })
        }),
    })
})

export const {
    useGetCrimesQuery,
    useGetCrimeByIDQuery,
    useGetCrimeByUidQuery,
    useDeleteCrimeMutation,
    useAddCrimeMutation,
    useUpdateCrimeMutation,
    useUpdateCrimeStatusMutation,
    useUploadMutation
} = crimeApi;