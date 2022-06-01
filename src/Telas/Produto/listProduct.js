import React from "react";
import Product from "./Product";

const ProductList = ({ products, setProducts, setEditProduct }) => {
  return (
    <div className="product_container">
      <div className="product_list">
        {products.map((product) => (
          <Product
            setProducts={setProducts}
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
