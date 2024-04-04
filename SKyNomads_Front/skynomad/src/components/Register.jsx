// Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [userData, setUserData] = useState({
    user_prenom: '',
    user_nom: '',
    user_email: '',
    user_PhoneNumber: '',
    user_password: '',
    user_Adresse: '',
    user_Ville: '',
    user_pays: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/users', userData);
      console.log('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user_prenom" placeholder="First Name" value={userData.user_prenom} onChange={handleChange} />
        <input type="text" name="user_nom" placeholder="Last Name" value={userData.user_nom} onChange={handleChange} />
        <input type="email" name="user_email" placeholder="Email" value={userData.user_email} onChange={handleChange} />
        <input type="text" name="user_PhoneNumber" placeholder="Phone Number" value={userData.user_PhoneNumber} onChange={handleChange} />
        <input type="password" name="user_password" placeholder="Password" value={userData.user_password} onChange={handleChange} />
        <input type="text" name="user_Adresse" placeholder="Address" value={userData.user_Adresse} onChange={handleChange} />
        <input type="text" name="user_Ville" placeholder="City" value={userData.user_Ville} onChange={handleChange} />
        <input type="text" name="user_pays" placeholder="Country" value={userData.user_pays} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
