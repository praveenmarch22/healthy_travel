import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

function DestinationFilters({ filters, onFilterChange }) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <SlidersHorizontal className="w-5 h-5" />
          <h3 className="text-lg font-semibold">Filters</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Budget (up to ${filters.budget})
            </label>
            <input
              type="range"
              min="3000"
              max="10000"
              step="100"
              value={filters.budget}
              onChange={(e) => onFilterChange('budget', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$3000</span>
              <span>$10000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Destination Type
            </label>
            <select
              value={filters.destinationType}
              onChange={(e) => onFilterChange('destinationType', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">All Types</option>
              <option value="mountain">Mountain</option>
              <option value="beach">Beach</option>
              <option value="city">City</option>
              <option value="countryside">Countryside</option>
              <option value="desert">Desert</option>
              <option value="island">Island</option>
              <option value="forest">Forest</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Health Conditions
            </label>
            <select
              multiple
              value={filters.healthConditions}
              onChange={(e) => onFilterChange('healthConditions', 
                Array.from(e.target.selectedOptions, (option) => option.value)
              )}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="diabetes">Diabetes</option>
              <option value="heartCondition">Heart Condition</option>
              <option value="asthma">Asthma</option>
              <option value="arthritis">Arthritis</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Dietary Restrictions
            </label>
            <select
              multiple
              value={filters.dietaryRestrictions}
              onChange={(e) => onFilterChange('dietaryRestrictions',
                Array.from(e.target.selectedOptions, (option) => option.value)
              )}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="gluten-free">Gluten Free</option>
              <option value="dairy-free">Dairy Free</option>
              <option value="organic">Organic</option>
              <option value="halal">Halal</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Accessibility Requirements
            </label>
            <select
              value={filters.accessibility}
              onChange={(e) => onFilterChange('accessibility', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Any</option>
              <option value="wheelchair">Wheelchair Access</option>
              <option value="limited-mobility">Limited Mobility</option>
              <option value="full">Full Accessibility</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationFilters;