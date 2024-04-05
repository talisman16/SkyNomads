import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/Logo/1.png" alt="Company Logo" className="h-12 w-15 mr-2" />
            <Link to="/" className="block mb-4">
              <h2 className="text-2xl font-bold text-green-600 cursor-pointer">SkyNomads</h2>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/login" className="bg-green-600 text-white py-2 px-4 rounded-md font-semibold focus:outline-none focus:shadow-outline mr-3">
              Login
            </Link>
            <Link to="/register" className="bg-green-100 text-green-600 py-2 px-4 rounded-md font-semibold hover:bg-green-200 focus:outline-none focus:shadow-outline mr-3">
              Register
            </Link>
            <Link to="/about" className="bg-green-100 text-green-600 py-2 px-4 rounded-md font-semibold hover:bg-green-200 focus:outline-none focus:shadow-outline">
              About
            </Link>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-md focus:outline-none focus:shadow-outline">
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
