import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/Login/Login';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import useUserData from './components/DATA/UserData'; // Import the useUserData hook
import FlightReservations from './components/Booking';
import Aeroport from './components/Admins/Aeroport';
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  const { userData, setUserData } = useUserData(); // Initialize userData and setUserData using the hook

  return (
    <Router>
       <ChakraProvider>
      <div className="bg-gray-100 min-h-screen">
        <Navbar userData={userData} /> {/* Pass userData to the Navbar component */}
        <div className="flex-1 p-4">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/admin" element={<Aeroport />} />
            <Route exact path="/login" element={<LoginForm setUserData={setUserData} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/book" element={<FlightReservations />} />
            <Route path="/dashboard" element={<Dashboard userData={userData} />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
