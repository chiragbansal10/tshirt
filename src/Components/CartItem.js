import React from 'react';

function CartItem({ item, updateQuantity, removeFromCart }) {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: Rs {item.price}</p>
      <label>
        Qty:
        <select value={item.quantity} onChange={(e) => updateQuantity(item.id, Number(e.target.value))}>
          {[...Array(10).keys()].map(i => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </label>
      <button onClick={() => removeFromCart(item.id)}>Delete</button>
    </div>
  );
}

export default CartItem;
