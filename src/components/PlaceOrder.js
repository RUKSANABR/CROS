// src/components/PlaceOrder.js
import React, { useState } from 'react';
import { placeOrder } from '../Order';
import { auth } from '../firebaseConfig';

const PlaceOrder = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      try {
        await placeOrder({ userId: user.uid, productName, quantity });
        alert('Order placed successfully');
      } catch (error) {
        console.error(error);
        alert('Failed to place order');
      }
    } else {
      alert('Please log in to place an order');
    }
  };

  return (
    <form onSubmit={handlePlaceOrder}>
      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" required />
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default PlaceOrder;
