import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import useUserData from './DATA/useUserData';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import RegisterPage from './pages/register';
import AboutUsPage from './pages/about';
import LoginPage from './pages/login';
import Welcome from './pages/welcome';
import AdminPanel from './pages/ADMIN/AdminPanel';

function App() {
  // Fetch user data and the setUserData function from the useUserData hook
  const { userData, logout, setUserData } = useUserData();

  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          {/* Pass userData, logout function, and setUserData function as props to the NavBar component */}
          <NavBar userData={userData} logout={logout} setUserData={setUserData} />
          <Routes>
            {/* Pass setUserData function to LoginPage component */}
            <Route path="/login" element={<LoginPage  />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
