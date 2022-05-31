import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

const Product = () => {
    return (
        <div className="product">
            <li className="product_item">banana</li>
            <CheckIcon />
            <DeleteIcon/>
        </div>
    );
}

export default Product;