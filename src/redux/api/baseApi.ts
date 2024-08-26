/* eslint-disable @typescript-eslint/no-explicit-any */
import {  createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery(
    { 
        baseUrl: 'http://localhost:5000/api' ,
        credentials: 'include',
        prepareHeaders: (headers,{getState}) =>{
            const token = (getState() as RootState).user.token
            if(token){
                headers.set('authorization',`Bearer ${token}`)
            }

            return headers
        }
    },
    //! here credentials include means access cookie info from cookies**
 )

 

export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery:baseQuery, 
    tagTypes:["Bookings"],
    endpoints: () =>({ })
})


