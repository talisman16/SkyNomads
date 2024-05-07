import NavBar from "./components/Navbar";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={< RegisterPage/>} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
