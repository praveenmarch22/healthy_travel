import React from 'react';
import { Calendar, DollarSign, Check } from 'lucide-react';

function PricingCard({ basePrice }) {
  const packages = [
    { days: 3, multiplier: 2.5, features: ['Hotel Stay', 'Breakfast', 'Local Transport'] },
    { days: 5, multiplier: 4, features: ['Hotel Stay', 'All Meals', 'Local Transport', 'Guided Tours'] },
    { days: 7, multiplier: 5.5, features: ['Hotel Stay', 'All Meals', 'Local Transport', 'Guided Tours', 'Special Activities'] },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Calendar className="w-5 h-5 mr-2" />
        Package Options
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {packages.map(({ days, multiplier, features }) => (
          <div
            key={days}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="text-center mb-4">
              <h4 className="text-lg font-semibold">{days} Days Package</h4>
              <div className="flex items-center justify-center mt-2">
                <DollarSign className="w-4 h-4 text-blue-600" />
                <span className="text-2xl font-bold text-blue-600">
                  ${Math.round(basePrice * multiplier)}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">per person</p>
            </div>
            <div className="flex-grow">
              <ul className="space-y-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCard;