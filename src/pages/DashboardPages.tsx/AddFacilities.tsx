import { useAddFacilityMutation } from '@/redux/api/facility/facilityApi';
import { setDescription, setLocation, setName, setPricePerHour } from '@/redux/features/addFacilitySlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import React from 'react';

const AddFacilities = () => {
  const dispatch = useAppDispatch()
  const {name,description,location,pricePerHour} = useAppSelector((state:RootState)=>state.facility)

  const [addFacility] = useAddFacilityMutation()

  const handleSubmit = async (e:React.FormEvent) =>{
    e.preventDefault()

    const facilityData = {
      name,
      description,
      location,
     pricePerHour
    }
    const data = await addFacility(facilityData)
    console.log(data)
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-12 mb-12">
      <h2 className="text-2xl font-semibold mb-4">Add New Facility</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Facility Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium text-gray-700">
              Facility Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e)=>dispatch(setName(e.target.value))}
              placeholder="Fortune Sports Arena ctg"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          

          {/* Price Per Hour */}
          <div className="flex flex-col">
            <label htmlFor="pricePerHour" className="mb-2 font-medium text-gray-700">
              Price Per Hour ($)
            </label>
            <input
              type="number"
              id="pricePerHour"
              name="pricePerHour"
              placeholder="50"
              value={pricePerHour}
              onChange={(e)=>dispatch(setPricePerHour(parseFloat(e.target.value)))}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Location */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="location" className="mb-2 font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e)=>dispatch(setLocation(e.target.value))}
              placeholder="Chandgaon, Chittagong"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col md:col-span-2">
            <label htmlFor="description" className="mb-2 font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e)=>dispatch(setDescription(e.target.value))}
              placeholder="Outdoor cricket & football pitch field in chandgaon"
              rows={4}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              required
            />
          </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Add Facility
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFacilities;
