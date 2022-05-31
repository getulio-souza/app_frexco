import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

const Product = ({ text, product, products, setProducts }) => {
  //Removendo alimentos adicionados
  const deleteHandler = () => {
    setProducts(products.filter((el) => el.id !== product.id));
  };

  return (
    <section className="product">
      <li className="product_item">{text}</li>
      <div className="check_btn">
        <CheckIcon />
      </div>
      <div className="delete_btn" onClick={deleteHandler}>
        <DeleteIcon color="error" />
      </div>
    </section>
  );
};

export default Product;
