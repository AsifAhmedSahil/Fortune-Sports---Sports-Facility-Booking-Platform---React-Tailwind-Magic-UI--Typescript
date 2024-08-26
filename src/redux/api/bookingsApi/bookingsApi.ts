

import { baseApi } from "../baseApi";


const bookingsApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        getBookings: builder.query({
            query:() =>({
                url:"/bookings",
                method: "GET"
            }),
            providesTags:["Bookings"]
        }),
        getSingleBookings: builder.query({
            query:(user) =>({
                url:`/bookings/${user}`,
                method: "GET"
            }),
            providesTags:["Bookings"]
        }),
        deleteBooking: builder.mutation({
            query:(id) =>({
                url:`/bookings/${id}`,
                method:"DELETE"
               
            }),
            invalidatesTags:["Bookings"]
        }),
        
    })
})

export const {useGetBookingsQuery,useDeleteBookingMutation,useGetSingleBookingsQuery} = bookingsApi