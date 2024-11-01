
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Sidebar from './Components/Sidebar';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    gender: [],
    color: [],
    type: [],
    price: []
  });

  useEffect(() => {
    axios.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleFilterChange = (category, value) => {
    setFilters(prevFilters => {
      const isChecked = prevFilters[category].includes(value);
      const updatedCategory = isChecked
        ? prevFilters[category].filter(item => item !== value)
        : [...prevFilters[category], value];
      return { ...prevFilters, [category]: updatedCategory };
    });
  };

  const applyFilters = () => {
    let filtered = products;
    if (filters.color && filters.color.length > 0) {
      filtered = filtered.filter(product => filters.color.includes(product.color));
    }
    if (filters.gender && filters.gender.length > 0) {
      filtered = filtered.filter(product => filters.gender.includes(product.gender));
    }
    if (filters.price && filters.price.length > 0) {
      filtered = filtered.filter(product => {
        const price = product.price;
        return filters.price.some(range => {
          if (range === '0-Rs250') return price <= 250;
          if (range === 'Rs251-450') return price > 250 && price <= 450;
          if (range === 'Rs450') return price > 450;
          return false;
        });
      });
    }
    if (filters.type && filters.type.length > 0) {
      filtered = filtered.filter(product => filters.type.includes(product.type));
    }
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const itemExists = prevCart.find(item => item.id === product.id);
      if (itemExists) {
        if (itemExists.quantity < product.stock) {
          return prevCart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          alert('Cannot add more than available stock');
          return prevCart;
        }
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  const handleSearch = () => {
    const searchedProducts = products.filter(
      product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(searchedProducts);
  };

  const MainContent = () => {
    return (
      <div className="app">
        <header className="header">
          <h1>TeeRex Store</h1>
          <div className="cart-icon">
            <span>Products</span>
            <Link to="/cart"><span role="img" aria-label="cart">🛒</span></Link>
          </div>
        </header>
        <div className="main-content">
          <Sidebar filters={filters} onFilterChange={handleFilterChange} />
          <div className="product-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button className="search-button-container" onClick={handleSearch}>Search</button>
            </div>
            <ProductList products={filteredProducts} addToCart={addToCart} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;

