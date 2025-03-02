import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cuisine: { type: String, required: true },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;
