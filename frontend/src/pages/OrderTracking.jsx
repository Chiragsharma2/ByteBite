import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const OrderTracking = () => {
  const [orderStatus, setOrderStatus] = useState('Pending')

  useEffect(() => {
    const socket = io('http://localhost:5000')
    // Replace '12345' with the actual order ID when available
    socket.emit('joinOrderRoom', { orderId: '12345' })

    socket.on('orderStatusUpdate', (status) => {
      setOrderStatus(status)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <div className="container mt-5">
      <h2>Order Tracking</h2>
      <p>Your order status: {orderStatus}</p>
    </div>
  )
}

export default OrderTracking
