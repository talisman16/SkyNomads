import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    

    try {
      const response = await axios.post('http://localhost:8080/users/login', {
        user_email: email,
        user_password: password
      });

      if (response.status === 200) {
        toast.success('Login successful');
        // Redirect to dashboard or any other page upon successful login
        // Example: history.push('/dashboard');
      } else {
        toast.error('Login failed');
      }
    } catch (error) {
      toast.error('Login failed');
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
          SkyNomads Flight Reservation
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-green-600 font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-green-600 font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
            <p className="text-gray-500 text-xs italic">
              Password must be at least 8 characters long and contain a number, a special character, and a letter.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="remember"
              />
              <label htmlFor="remember" className="form-check-label inline-block text-gray-800">
                Remember me
              </label>
            </div>
            <Link to="#" className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800">
              Forgot Password?
            </Link>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-500">
            Don't have an account? <Link to="/register" className="text-green-600 hover:underline">Register here</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;
