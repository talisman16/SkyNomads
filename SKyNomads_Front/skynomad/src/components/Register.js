import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Register = () => {
  const [countries, setCountries] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (!email || !password || !nom || !prenom || !selectedCountry) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (password.length < 8) {
      toast.error('Please enter a password with at least 8 characters');
      return;
    }

    if (nom.length < 5 || prenom.length < 5) {
      toast.error('Nom or prenom must be at least 5 characters long');
      return;
    }

    // Rest of the function
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
        Register
      </h2>
      <form onSubmit={handleRegister}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="nom" className="block text-green-600 font-bold mb-1">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={nom}
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              onChange={(event) => setNom(event.target.value)}
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
              value={prenom}
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your last name"
              onChange={(event) => setPrenom(event.target.value)}
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
  <label htmlFor="pays" className="block text-green-600 font-bold mb-1">
    Pays
  </label>
  <select
    id="pays"
    name="pays"
    className="block w-full py-2 px-3 text-gray-700 leading-tight border-gray-300 bg-white rounded-lg focus:outline-none focus:shadow-outline"
    onChange={handleCountryChange}
  >
    <option value="">Select a country</option>
    {countries.map((country) => (
      <option key={country.name.common} value={country.name.common}>
        {country.name.common}
      </option>
    ))}
  </select>
</div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-green-600 font-bold mb-1">
              Ville
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={selectedCity}
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your city"
              onChange={(event) => setSelectedCity(event.target.value)}
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
              value={email}
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              onChange={(event) => setEmail(event.target.value)}
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
              value={password}
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
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
      <ToastContainer />
    </div>
  );
};

export default Register;
