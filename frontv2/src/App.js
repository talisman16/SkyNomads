 
import   Navbar from "./components/navbar";
import Login from "./pages/login";
import Register from "./components/register";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from "./pages/landing";
 
function App() {
  return (
    
    <Router>
          <Navbar/>

      <Routes >
   
      <Route exact path="/" element={<HeroSection/>} />
      <Route exact path="/register" element={< Register/>} />
    <  Route exact path="/login" element={< Login/>} />
    
      </Routes>
    <Footer/>
    </Router>
    
  );
}

export default App;
 