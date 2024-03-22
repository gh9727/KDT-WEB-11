import React from 'react';
import ProductList from '../component/ProductList';

export default function ProductPage({ products }) {
  return (
    <div>
      <h1>
        <ProductList products={products} />
      </h1>
    </div>
  );
}
