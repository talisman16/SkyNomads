import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Backgrounds/HeroBackground.jpg'})` }}>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white">Welcome to SkyNomads</h1>
          <p className="text-gray-300 mt-4">Find and book the best flights for your next adventure</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">Book Now</button>
        </div>
      </section>
      
    </div>
  );
}

export default LandingPage;
