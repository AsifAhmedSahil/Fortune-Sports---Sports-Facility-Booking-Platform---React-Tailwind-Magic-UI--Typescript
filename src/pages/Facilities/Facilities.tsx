import { useGetFacilityQuery } from "@/redux/api/facility/facilityApi"
import Card from "../Components/Card"




const Facilities = () => {
  const {data} = useGetFacilityQuery(undefined)
  // console.log(data.data)
  const facilities = data?.data
  return (
    <div className="max-w-7xl mx-auto ">
      {
      facilities?.map((item, index) => (
        <div className="my-6">
          <Card key={index}/>
        </div>
      ))
    }
    </div>
  )
}

export default Facilities