import { useLoaderData } from "react-router-dom"


const BookingDetails = () => {
    const {data} = useLoaderData()
    console.log(data)
  return (
    
<div className="flex flex-col items-center justify-center p-12 bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_54%,#4F21A1_75%,#A46EDB_99%)]">
   
    <h2 className="text-center font-bold text-3xl md:text-5xl lg:text-5xl text-white/80   tracking-tighter pb-10 lg:pb-24 pt-6 lg:pt-10">Reserve Your Game Time at <span className="text-white">'GoalMaster Arena'</span> Today</h2>
  <div className="mx-auto w-full max-w-[550px] ">
    <form  action="https://htmlFormbold.com/s/htmlForM_ID" method="POST">
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 ">
          <div className="mb-5">
            <label
              htmlFor="fName"
              className="mb-3 block text-base font-medium text-white"
            >
              Court Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="Court Name"
              value={data.name}
              disabled
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="fName"
              className="mb-3 block text-base font-medium text-white"
            >
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="lName"
              className="mb-3 block text-base font-medium text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="guest"
          className="mb-3 block text-base font-medium text-white"
        >
          How many guest are you bringing?
        </label>
        <input
          type="number"
          name="guest"
          id="guest"
          placeholder="5"
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="date"
              className="mb-3 block text-base font-medium text-white"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="time"
              className="mb-3 block text-base font-medium text-white"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-white">
          Are you coming to the event?
        </label>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              className="h-5 w-5"
            />
            <label
              htmlFor="radioButton1"
              className="pl-3 text-base font-medium text-white"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              className="h-5 w-5"
            />
            <label
              htmlFor="radioButton2"
              className="pl-3 text-base font-medium text-white"
            >
              No
            </label>
          </div>
        </div>
      </div>

      <div>
        <button
          className="hover:shadow-htmlForm rounded-md bg-black py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Payment
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default BookingDetails