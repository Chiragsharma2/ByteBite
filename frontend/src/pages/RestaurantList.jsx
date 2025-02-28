import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/restaurants')
        setRestaurants(response.data)
      } catch (error) {
        console.error('Error fetching restaurants:', error)
      }
    }
    fetchRestaurants()
  }, [])

  return (
    <div className="container mt-5">
      <h2>Restaurants</h2>
      <div className="row">
        {restaurants.map((restaurant) => (
          <div className="col-md-4" key={restaurant._id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text">{restaurant.description}</p>
                <p className="card-text">Cuisine: {restaurant.cuisine}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantList
