import React from 'react';
import '../Styles/ProductLi.css';

function ProductLi() {
  const products = [
    { name: 'Black polo', price: 300 },
    { name: 'Blue polo', price: 300 },
    { name: 'Black hoodie', price: 500 },
    { name: 'Pink round', price: 250 },
    { name: 'Green round', price: 250 },
    { name: 'Pink hoodie', price: 500 },
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <div className="product-image"></div>
          <h4>{product.name}</h4>
          <p>Rs {product.price}</p>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductLi;
