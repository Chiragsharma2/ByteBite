import express from 'express';
import Restaurant from '../models/Restaurant.js';

const router = express.Router();

// Get all restaurants
router.get('/', async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
});

// Add a new restaurant
router.post('/', async (req, res) => {
  const { name, description, cuisine } = req.body;
  const restaurant = new Restaurant({ name, description, cuisine });
  await restaurant.save();
  res.status(201).json(restaurant);
});

export default router;
