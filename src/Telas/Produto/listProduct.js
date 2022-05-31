import React from "react";
import Product from "./Product";

const ProductList = ({ products, setProducts }) => {
  return (
    <div className="product_container">
      <div className="product_list">
        {products.map((product) => (
          <Product
            SetProducts={setProducts}
            products={products}
            key={product.id}
            product={product}
            text={product.text}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
