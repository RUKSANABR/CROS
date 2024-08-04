import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ViewProducts from './components/ViewProducts';
import PlaceOrder from './components/PlaceOrder';
import MyOrders from './components/MyOrders';
import './styles/styles.css';

const Home = () => (
  <div className="home">
    <h1>Catering Reservation and Ordering System</h1>
  </div>
);

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/view-products">View Products</Link>
        <Link to="/place-order">Place Order</Link>
        <Link to="/my-orders">My Orders</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/view-products" element={<ViewProducts />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
