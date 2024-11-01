import React from 'react';

function ProductItem({ product, addToCart }) {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: Rs {product.price}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
