import React, { useState, useMemo, useCallback } from 'react';
import DestinationFilters from '../../components/Destinations/DestinationFilters';
import DestinationCard from '../../components/Destinations/DestinationCard';
import SearchBar from '../../components/Destinations/SearchBar';
import { destinations } from '../../data/destinations';

function Destinations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    budget: 10000,
    destinationType: '',
    healthConditions: [],
    dietaryRestrictions: [],
    accessibility: '',
  });

  const destinationTypes = useMemo(() => [
    { type: '', label: 'All' },
    { type: 'mountain', label: 'Mountains' },
    { type: 'beach', label: 'Beaches' },
    { type: 'city', label: 'Cities' },
    { type: 'countryside', label: 'Countryside' },
    { type: 'desert', label: 'Desert' },
    { type: 'island', label: 'Islands' },
    { type: 'forest', label: 'Forests' },
  ], []);

  const handleFilterChange = useCallback((name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleTypeClick = useCallback((type) => {
    setFilters(prev => ({
      ...prev,
      destinationType: type,
    }));
  }, []);

  const filteredDestinations = useMemo(() => {
    let results = destinations;

    // Apply search filter
    if (searchQuery.trim()) {
      const searchLower = searchQuery.toLowerCase();
      results = results.filter(
        destination =>
          destination.name.toLowerCase().includes(searchLower) ||
          destination.location.toLowerCase().includes(searchLower)
      );
    }

    // Apply budget filter
    if (filters.budget < 10000) {
      results = results.filter(destination => destination.price <= filters.budget);
    }

    // Apply destination type filter
    if (filters.destinationType) {
      results = results.filter(destination => destination.type === filters.destinationType);
    }

    // Apply accessibility filter
    if (filters.accessibility) {
      results = results.filter(destination => destination.accessibility === filters.accessibility);
    }

    // Apply dietary restrictions filter
    if (filters.dietaryRestrictions.length > 0) {
      results = results.filter(destination =>
        filters.dietaryRestrictions.some(diet =>
          destination.dietaryOptions.includes(diet.toLowerCase())
        )
      );
    }

    return results;
  }, [filters, searchQuery]);

  const renderedDestinations = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredDestinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  ), [filteredDestinations]);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Explore Destinations</h1>
      
      {/* Destination Type Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {destinationTypes.map(({ type, label }) => (
            <button
              key={type || 'all'}
              onClick={() => handleTypeClick(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                filters.destinationType === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
            <DestinationFilters
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="lg:col-span-3">
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No destinations match your criteria. Try adjusting your filters or search query.</p>
            </div>
          ) : renderedDestinations}
        </div>
      </div>
    </div>
  );
}

export default Destinations;