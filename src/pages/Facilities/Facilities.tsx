import { useGetFacilityQuery } from "@/redux/api/facility/facilityApi"


const Facilities = () => {
  const {data} = useGetFacilityQuery(undefined)
  console.log(data)
  return (
    <div>Facilities</div>
  )
}

export default Facilities