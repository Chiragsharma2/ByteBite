import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantItems = () => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  // Fetch the menu items when the component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      // Replace with your actual endpoint for fetching restaurant items
      const response = await axios.get('http://localhost:5000/api/restaurant/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // Delete an item by its ID
  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/restaurant/items/${itemId}`);
      setItems(items.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  // Open the edit form for a specific item
  const handleEditClick = (item) => {
    setEditItem(item);
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price,
    });
  };

  // Update form state as the user types
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit the edited item
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your endpoint for updating an item
      const response = await axios.put(
        `http://localhost:5000/api/restaurant/items/${editItem._id}`,
        formData
      );
      // Update the item in the state
      const updatedItems = items.map((item) =>
        item._id === editItem._id ? response.data : item
      );
      setItems(updatedItems);
      setEditItem(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  // Cancel the edit mode
  const handleCancelEdit = () => {
    setEditItem(null);
  };

  return (
    <div className="container mt-5">
      <h2>Menu Items</h2>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price (₹)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => handleEditClick(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editItem && (
        <div className="mt-4">
          <h3>Edit Item</h3>
          <form onSubmit={handleEditSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-control"
                value={formData.description}
                onChange={handleFormChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                name="price"
                className="form-control"
                value={formData.price}
                onChange={handleFormChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success me-2">
              Update
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RestaurantItems;
