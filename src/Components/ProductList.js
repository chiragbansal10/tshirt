

import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h4>{product.name}</h4>
          <p>Price: Rs{product.price}</p>
          <p>Color: {product.color}</p>
          <p>Gender: {product.gender}</p>
          <p>Type: {product.type}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
