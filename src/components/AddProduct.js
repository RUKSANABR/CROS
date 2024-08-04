// src/components/AddProduct.js
import React, { useState } from 'react';
import { addProduct } from '../Product';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (price <= 0) {
      setError('Price must be a positive number');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await addProduct({ name: productName, price: parseFloat(price) });
      alert('Product added successfully');
      setProductName('');
      setPrice('');
    } catch (error) {
      console.error(error);
      setError('Failed to add product: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleAddProduct}>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Product'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AddProduct;
