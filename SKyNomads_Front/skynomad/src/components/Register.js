import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
        Register
      </h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="nom" className="block text-green-600 font-bold mb-1">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="prenom" className="block text-green-600 font-bold mb-1">
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label htmlFor="adresse" className="block text-green-600 font-bold mb-1">
              Adresse
            </label>
            <input
              type="text"
              id="adresse"
              name="adresse"
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ville" className="block text-green-600 font-bold mb-1">
              Ville
            </label>
            <input
              type="text"
              id="ville"
              name="ville"
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your city"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pays" className="block text-green-600 font-bold mb-1">
              Pays
            </label>
            <input
              type="text"
              id="pays"
              name="pays"
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your country"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label htmlFor="email" className="block text-green-600 font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-green-600 font-bold mb-1">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-6 col-span-2">
            <label htmlFor="password" className="block text-green-600 font-bold mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
            <p className="text-gray-500 text-xs italic">
              Password must be at least 8 characters long and contain a number, a special character, and a letter.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <p className="text-gray-500">
          Already have an account? <Link to="/login" className="text-green-600 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
