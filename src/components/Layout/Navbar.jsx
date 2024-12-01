import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserCircle, LogOut, Plane } from 'lucide-react';
import useAuthStore from '../../store/authStore';

function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const linkClasses = (path) => {
    return `text-gray-600 hover:text-blue-600 transition-colors duration-200 ${
      isActive(path) ? 'text-blue-600 border-b-2 border-blue-600' : ''
    }`;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">HealthyTravel</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={linkClasses('/')}
            >
              Home
            </Link>
            <Link 
              to="/destinations" 
              className={linkClasses('/destinations')}
            >
              Destinations
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/profile" 
                  className={`${linkClasses('/profile')} flex items-center`}
                >
                  <UserCircle className="w-6 h-6" />
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <LogOut className="w-6 h-6" />
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className={linkClasses('/login')}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;