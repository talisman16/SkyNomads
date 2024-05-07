import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useUserData from '../DATA/UserData';

const LoginForm = ({ setUserData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
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
        navigate('/dashboard');
        window.location.reload();
        console.log(response.data)

        localStorage.setItem('userData', JSON.stringify(response.data));
        setUserData(response.data);

        
        
    
        
      } else {
        toast.error('An error occurred during login. Please try again.');
      }
    } catch (error) {
          toast.error("loggin later!")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
          SkyNomads Flight Reservation
        </h2>
        <form onSubmit={handleLogin}>
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
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-green-600 font-bold mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
            <div className="absolute right-0 top-0 mt-3 mr-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
                  <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4zM10 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
                  <path fillRule="evenodd" d="M10 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 14a6 6 0 100-12 6 6 0 000 12zm0-8a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
                </svg>
              )}
            </div>
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
