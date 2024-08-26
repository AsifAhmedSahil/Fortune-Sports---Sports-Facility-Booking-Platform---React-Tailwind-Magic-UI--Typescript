import { useGetFacilityQuery } from "@/redux/api/facility/facilityApi"



const Facilities = () => {
  const {data} = useGetFacilityQuery(undefined)
  const facilities = data?.data
  return (
    <div>
    
    </div>
  )
}

export default Facilities