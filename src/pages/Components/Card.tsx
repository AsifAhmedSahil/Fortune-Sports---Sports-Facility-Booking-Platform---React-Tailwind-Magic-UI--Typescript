import React from "react";

const Card = ({ name, description, pricePerHour, location }) => {
  return (
    <div className="w-80 h-80 mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Card Content */}
      <div className="p-4 flex-1">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="flex items-center justify-between mb-4 text-sm">
          <span className="text-lg font-semibold text-green-600">${pricePerHour}/hr</span>
          <span className="text-gray-500">{location}</span>
        </div>
      </div>
      <button className="py-2 bg-blue-600 text-white rounded-b-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Book Now
      </button>
    </div>
  );
};

export default Card;
