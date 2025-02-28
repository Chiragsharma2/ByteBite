import React, { useState } from 'react';
import axios from 'axios';

const RestaurantDashboard = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [description, setDescription] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data to handle file upload along with other fields
    const formData = new FormData();
    formData.append('name', restaurantName);
    formData.append('description', description);
    formData.append('cuisine', cuisine);
    formData.append('image', image);

    try {
      // Adjust the endpoint URL to match your backend route for restaurant registration
      const response = await axios.post('http://localhost:5000/api/restaurants/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Restaurant registered successfully!');
      // Optionally, reset form or redirect the user
    } catch (error) {
      console.error('Error registering restaurant:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Restaurant Dashboard</h2>
      <p>Register or update your restaurant details below.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="restaurantName" className="form-label">Restaurant Name</label>
          <input
            type="text"
            id="restaurantName"
            className="form-control"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cuisine" className="form-label">Cuisine Type</label>
          <input
            type="text"
            id="cuisine"
            className="form-control"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            placeholder="e.g., Italian, Chinese, Indian"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Upload Image</label>
          <input
            type="file"
            id="image"
            className="form-control"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register Restaurant</button>
      </form>
    </div>
  );
};

export default RestaurantDashboard;
