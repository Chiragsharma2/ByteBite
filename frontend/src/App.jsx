// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Customer pages
import Login from './pages/Login'
import Home from './pages/Home'
import RestaurantList from './pages/RestaurantList'
import Cart from './pages/Cart'
import OrderTracking from './pages/OrderTracking'

// Restaurant owner pages
import RestaurantDashboard from './pages/RestaurantDashboard'
import RestaurantItems from './pages/RestaurantItems'

// Components
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      {/* Global Navigation Bar */}
      <Navbar />
      
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Customer Protected Routes */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/restaurants" 
          element={
            <ProtectedRoute>
              <RestaurantList />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/cart" 
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/order-tracking" 
          element={
            <ProtectedRoute>
              <OrderTracking />
            </ProtectedRoute>
          } 
        />

        {/* Restaurant Owner Protected Routes */}
        <Route 
          path="/restaurant-dashboard" 
          element={
            <ProtectedRoute>
              <RestaurantDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/restaurant-dashboard/items" 
          element={
            <ProtectedRoute>
              <RestaurantItems />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
