// src/components/MyOrders.js
import React, { useEffect, useState } from 'react';
import { getUserOrders } from '../Order';
import { auth } from '../firebaseConfig';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const user = auth.currentUser;
      if (user) {
        const ordersSnapshot = await getUserOrders(user.uid);
        const ordersList = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrders(ordersList);
      } else {
        console.error("No user is currently logged in");
      }
      setLoading(false);
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!auth.currentUser) {
    return <div>Please log in to view your orders.</div>;
  }

  return (
    <div>
      <h1>My Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.productName} - {order.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyOrders;
