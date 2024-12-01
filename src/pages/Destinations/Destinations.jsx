import React, { useState, useMemo } from 'react';
import DestinationFilters from '../../components/Destinations/DestinationFilters';
import DestinationCard from '../../components/Destinations/DestinationCard';
import SearchBar from '../../components/Destinations/SearchBar';
import { destinations } from '../../data/destinations';

function Destinations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    budget: 5000,
    healthConditions: [],
    dietaryRestrictions: [],
    accessibility: '',
  });

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      if (
        searchQuery &&
        !destination.name.toLowerCase().includes(searchLower) &&
        !destination.location.toLowerCase().includes(searchLower)
      ) {
        return false;
      }

      // Budget filter
      if (destination.price > filters.budget) {
        return false;
      }

      // Accessibility filter
      if (filters.accessibility && destination.accessibility !== filters.accessibility) {
        return false;
      }

      // Dietary restrictions filter
      if (filters.dietaryRestrictions.length > 0) {
        const hasMatchingDiet = filters.dietaryRestrictions.some(diet =>
          destination.dietaryOptions.includes(diet.toLowerCase())
        );
        if (!hasMatchingDiet) {
          return false;
        }
      }

      return true;
    });
  }, [filters, searchQuery, destinations]);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Explore Destinations</h1>
      
      {/* Search Bar */}
      <SearchBar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="md:col-span-1">
          <DestinationFilters
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Destinations Grid */}
        <div className="md:col-span-3">
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No destinations match your criteria. Try adjusting your filters or search query.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Destinations;