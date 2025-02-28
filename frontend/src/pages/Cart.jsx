import React, { useState } from 'react'
import axios from 'axios'

const Cart = () => {
  // Example cart items 
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Pizza', price: 200, quantity: 1 },
    { id: 2, name: 'Burger', price: 100, quantity: 2 }
  ])

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = async () => {
    try {
      const orderData = {
        items: cartItems,
        total: totalAmount
      }
      const response = await axios.post('http://localhost:5000/api/orders', orderData)
      alert(`Order placed! Order ID: ${response.data.orderId}`)
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Checkout failed')
    }
  }

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      <ul className="list-group mb-3">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between">
            <div>{item.name} (x{item.quantity})</div>
            <div>₹{item.price * item.quantity}</div>
          </li>
        ))}
      </ul>
      <h4>Total: ₹{totalAmount}</h4>
      <button className="btn btn-success mt-3" onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  )
}

export default Cart
