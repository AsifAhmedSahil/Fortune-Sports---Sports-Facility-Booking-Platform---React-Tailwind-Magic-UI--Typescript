import { useParams } from "react-router-dom"


const UpdateBookings = () => {
    const {id} =useParams()
    console.log(id)
  return (
    <div className="">UpdateBookings</div>
  )
}

export default UpdateBookings