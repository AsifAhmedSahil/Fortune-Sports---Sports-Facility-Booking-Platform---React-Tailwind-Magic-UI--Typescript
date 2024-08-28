

import { baseApi } from "../baseApi";


const bookingsApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        createBooking: builder.mutation({
            query:(bookingData) =>({
                url:"/bookings/",
                method:"POST",
                body:bookingData
            }),
            invalidatesTags:["Bookings"]
        }),
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

export const {useGetBookingsQuery,useDeleteBookingMutation,useGetSingleBookingsQuery,useCreateBookingMutation} = bookingsApi