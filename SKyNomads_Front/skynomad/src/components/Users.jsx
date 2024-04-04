// UsersPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.user_nom}, {user.user_prenom}<br />
            <strong>Email:</strong> {user.user_email}<br />
            <strong>Phone Number:</strong> {user.user_PhoneNumber}<br />
            <strong>Address:</strong> {user.user_Adresse}, {user.user_Ville}, {user.user_pays}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
