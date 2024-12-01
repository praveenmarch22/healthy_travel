import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Heart, Clock, MapPin, Users } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Travel Healthy, Travel Smart
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Find budget-friendly destinations that cater to your health needs and preferences.
          </p>
          <Link
            to="/destinations"
            className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Explore Destinations
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
              <p className="text-gray-600">
                Find destinations that match your budget and health requirements with our intelligent search system.
              </p>
            </div>
            <div className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health First</h3>
              <p className="text-gray-600">
                All destinations are vetted for medical facilities and accessibility options.
              </p>
            </div>
            <div className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
              <p className="text-gray-600">
                Get recommendations tailored to your specific health needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance for all your travel needs and emergencies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Locations</h3>
              <p className="text-gray-600">
                All destinations are personally verified for quality and accessibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Reviews</h3>
              <p className="text-gray-600">
                Real feedback from travelers with similar health considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of travelers who trust us with their health-conscious travel needs.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;