import React from "react";
import Product from "./Product" 

const ProductList = () => {
    return (
        <div className="product_container">
            <ul className="product_list">
                <Product/>
                <Product/>
                <Product/>
            </ul>
        </div>
    );
};

export default ProductList