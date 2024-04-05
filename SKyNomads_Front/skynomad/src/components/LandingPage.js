import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'Logo/bg.png'})` }}>
        <div className="text-center bg-gray-900/75 p-8 rounded-lg shadow-2xl">
          <h1 className="text-6xl font-bold text-white">Welcome to SkyNomads</h1>
          <p className="text-gray-300 mt-4">Find and book the best flights for your next adventure</p>
          <div className='py-7 mg-5'>
          <Link to="/register" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">Book Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
