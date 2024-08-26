import React from 'react'

const AddFacilities = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Facility</h2>
      <form>
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
              placeholder="Fortune Sports Arena ctg"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-2 font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Outdoor cricket & football pitch field in chandgaon"
              rows={4}
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
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          {/* Location */}
          <div className="flex flex-col">
            <label htmlFor="location" className="mb-2 font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Chandgaon, Chittagong"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
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
  )
}

export default AddFacilities