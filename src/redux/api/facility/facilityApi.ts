import { baseApi } from "../baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addFacility: builder.mutation({
            query:(facilityData) =>({
                url:"/facility/",
                method:"POST",
                body:facilityData
            }),
            invalidatesTags:["Bookings"]
        }),
       
        getFacility: builder.query({
            query:() =>({
                url:"/facility/",
                method:"GET",
                
            })
            ,providesTags:["Bookings"]
        }),
        updateFacility: builder.mutation({
            query:(facilityData) =>({
                url:"/facility/",
                method:"POST",
                body:facilityData
            }),
            invalidatesTags:["Bookings"]
        }),
        deleteFacility: builder.mutation({
            query:(id) =>({
                url:`/facility/${id}`,
                method:"DELETE"
               
            }),
            invalidatesTags:["Bookings"]
        }),
        
    })
})

export const {useAddFacilityMutation,useGetFacilityQuery,useDeleteFacilityMutation,useUpdateFacilityMutation} = authApi