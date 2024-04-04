// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [loginData, setLoginData] = useState({
    user_email: '',
    user_password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', loginData);
      console.log('User logged in successfully:', response.data);
      // You can handle the successful login response here, such as setting user state or redirecting to user page
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="user_email" placeholder="Email" value={loginData.user_email} onChange={handleChange} />
        <input type="password" name="user_password" placeholder="Password" value={loginData.user_password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
