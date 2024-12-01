import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, DollarSign, Activity, Utensils, Accessibility } from 'lucide-react';
import { destinations } from '../../data/destinations';

function DestinationDetails() {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === parseInt(id));

  if (!destination) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Destination not found</h2>
        <Link to="/destinations" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
          Return to destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <Link
        to="/destinations"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Destinations
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{destination.name}</h1>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              {destination.location}
            </div>
            <div className="flex items-center mt-2 text-blue-600">
              <DollarSign className="w-5 h-5 mr-2" />
              <span className="text-2xl font-bold">${destination.price}</span>
              <span className="ml-2">per person</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Activities
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {destination.activities.map((activity) => (
                <span
                  key={activity}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                >
                  {activity}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold flex items-center">
              <Utensils className="w-5 h-5 mr-2" />
              Dietary Options
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {destination.dietaryOptions.map((option) => (
                <span
                  key={option}
                  className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold flex items-center">
              <Accessibility className="w-5 h-5 mr-2" />
              Accessibility
            </h2>
            <p className="mt-2 text-gray-600 capitalize">
              {destination.accessibility.replace('-', ' ')}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Health Features</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {destination.healthFeatures.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;