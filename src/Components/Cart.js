
import React from 'react';
import CartItem from './CartItem';
import '../Styles/Cart.css';
function Cart({ cart, updateQuantity, removeFromCart }) {
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          <div className="total">
            <h3>Total Amount: Rs {totalAmount}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

