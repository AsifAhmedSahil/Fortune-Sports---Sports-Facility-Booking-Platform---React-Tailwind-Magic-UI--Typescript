// src/components/Card.jsx
import React from 'react';

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <div className="card max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-gray-800 border border-gray-700">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="p-4 bg-gray-700 flex justify-end">
        <a href={link} className="text-teal-400 hover:underline">Read More</a>
      </div>
    </div>
  );
};

export default Card;
