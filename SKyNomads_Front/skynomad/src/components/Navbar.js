import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ userData }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/Logo/1.png" alt="Company Logo" className="h-12 w-15 mr-2" />
            <Link to="/" className="block mb-4 font-bold text-2xl text-green-600 cursor-pointer">
              SkyNomads
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/about" className="bg-green-100 text-green-600 py-2 px-4 rounded-md font-semibold hover:bg-green-200 focus:outline-none focus:shadow-outline mr-3">
              About
            </Link>
            {userData ? (
              <>
                {userData.user_email === 'admin@admin.com' && (
                  <button onClick={() => navigate('/admin')} className="bg-yellow-500 text-white py-2 px-4 rounded-md font-semibold focus:outline-none focus:shadow-outline mr-3">
                    Admin Panel
                  </button>
                )}
                <Link to="/dashboard" className="bg-green-100 text-green-600 py-2 px-4 rounded-md font-semibold hover:bg-green-200 focus:outline-none focus:shadow-outline mr-3">
                  Profile
                </Link>
                <button onClick={handleLogout} className="bg-red-600 text-white py-2 px-4 rounded-md font-semibold focus:outline-none focus:shadow-outline">
                  Logout
                </button>
                <p className="ml-3 text-gray-600">Welcome {userData.user_nom} ! </p>
              </>
            ) : (
              <>
                <Link to="/login" className="bg-green-600 text-white py-2 px-4 rounded-md font-semibold focus:outline-none focus:shadow-outline mr-3">
                  Login
                </Link>
                <Link to="/register" className="bg-green-100 text-green-600 py-2 px-4 rounded-md font-semibold hover:bg-green-200 focus:outline-none focus:shadow-outline">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
}

export default Navbar;
