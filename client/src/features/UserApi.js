import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "UserApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:8000/api/'}),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUserById: builder.query({
            query:(UserID) => `users/${UserID}`,
            providesTags: ['Users']
        }),
        registerUser: builder.mutation({
            query: (user) => ({
                url: 'users/register',
                method: 'POST',
                body: user
            }),
            invalidatesTags:['Users']
        }),
        authenticateUser: builder.mutation({
            query: (user) => ({
                url: 'users/auth/login',
                method:'POST',
                body: user
            }),
            onSuccess: (response, variables, api) => {
                const { token, user } = response;
                storeToken(token);
                storeUser(user);
            },
            invalidatesTags:['Users']
        }),
        updateUser:builder.mutation({
            query:(user)=>({
                url: `users/update/${user.UserID}`,
                method: 'PUT',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        deleUser: builder.mutation({
            query: (UserID) => ({
                url: `users/delete/${UserID}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users']
        })
    })
})

export const {
    useGetUserByIdQuery,
    useRegisterUserMutation,
    useAuthenticateUserMutation,
    useUpdateUserMutation,
    useDeleUserMutation
} = userApi