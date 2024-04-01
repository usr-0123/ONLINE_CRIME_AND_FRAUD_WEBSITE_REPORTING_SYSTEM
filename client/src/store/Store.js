import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'

import { userApi } from '../features/UserApi.js'
import { crimeApi } from '../features/CrimeApi.js'

export const store = configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer,
        [crimeApi.reducerPath]:crimeApi.reducer,
    },

    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(
        userApi.middleware,
        crimeApi.middleware,
    )
})

setupListeners(store.dispatch)