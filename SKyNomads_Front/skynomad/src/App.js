// App.js or Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login  from './components/Login';
import Register from './components/Register';
import UsersPage from './components/Users';
const App = () => {
  return (
    
        <Login/>
    
  );
};

export default App;
