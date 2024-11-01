import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import '../Styles/ProductLi.css';

function Products() {
  return (
    <div className="app">
      <header className="header">
        <h1>TeeRex Store</h1>
        <div className="cart-icon">
          <span>Products</span>
          <span role="img" aria-label="cart">🛒</span>
          <span className="cart-count">6</span>
        </div>
      </header>
      <div className="main-content">
        <Sidebar />
        <div className="product-container">
          <div className="search-bar">
            <input type="text" placeholder="Search for products..." />
            <button>🔍</button>
            <button>🧩</button>
          </div>
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default Products;
