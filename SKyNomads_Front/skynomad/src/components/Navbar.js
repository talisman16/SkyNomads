import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/Logo/1.png" alt="Company Logo" className="h-12 w-15 mr-2" />
            <h2 className="text-2xl font-bold text-green-600">SkyNomads</h2>
          </div>
          <div className="flex items-center">
            <button className="bg-green-600 text-white py-2 px-4 rounded-md font-semibold focus:outline-none focus:shadow-outline">
              Login
            </button>
            <button className="ml-3 bg-green-100 text-green-600 py-2 px-4 rounded-md font-semibold hover:bg-green-200 focus:outline-none focus:shadow-outline">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
