import React from 'react'
import Cart from './Cart'
function ShoppingCart() {
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
    <Cart />
  </div>
  )
}

export default ShoppingCart
