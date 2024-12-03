import React from 'react';
import { Link } from 'react-router-dom';

function DestinationCard({ destination }) {
  const { id, name, location, price, image, healthFeatures, activities } = destination;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">{location}</p>
          <p className="text-blue-600 font-semibold mt-2">
            ${price}
          </p>
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700">Features:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {healthFeatures.map((feature) => (
                <span
                  key={feature}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700">Activities:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {activities.map((activity) => (
                <span
                  key={activity}
                  className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                >
                  {activity}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Link
          to={`/destinations/${id}`}
          className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 inline-block text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default DestinationCard;