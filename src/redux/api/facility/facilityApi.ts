import { baseApi } from "../baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addFacility: builder.mutation({
            query:(facilityData) =>({
                url:"/facility/",
                method:"POST",
                body:facilityData
            })
        }),
        getFacility: builder.query({
            query:() =>({
                url:"/facility/",
                method:"GET",
                
            })
        }),
    })
})

export const {useAddFacilityMutation,useGetFacilityQuery} = authApi