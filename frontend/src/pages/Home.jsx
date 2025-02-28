// src/pages/Home.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container mt-5">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1>Welcome, {user ? user.name : 'User'}!</h1>
        <button onClick={logout} className="btn btn-danger">Logout</button>
      </header>
      <p>This is your dashboard. Explore restaurants, place orders, and track your deliveries with ByteBite.</p>
    </div>
  );
};

export default Home;
