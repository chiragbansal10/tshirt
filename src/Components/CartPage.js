
import React from 'react';

function CartPage({ cart, updateQuantity, removeFromCart }) {
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.imageURL} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            min="1"
            max={item.stock}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalAmount}</h3>
    </div>
  );
}

export default CartPage;
