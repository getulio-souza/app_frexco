import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

const Product = ({ text, product, products, setProducts, setEditProduct }) => {

  //Removendo alimentos
  const deleteHandler = () => {
    setProducts(products.filter((el) => el.id !== product.id));
    };
    
    //adicionando alimentos 
    const completeHandler = () => {
        setProducts(products.map(item => {
            if (item.id === product.id) {
                return {
                    ...item, completed: !item.completed,
                }
            }
            return item;
        }))
  }

  //editando alimentos 
  const editHandler = () => {
    const findProduct = products.find((product) => product.id === id);
    setEditProduct(findProduct);
  }

  return (
    <section className="product">
      <li className={`product_item ${product.completed ? "completed" : "" }`}>{text}</li>
      <div onClick={completeHandler} className="check_btn">
        <CheckIcon />
      </div>
      <div className="edit_btn" onClick={editHandler}>
        <EditIcon color="primary" />
      </div>
      <div className="delete_btn" onClick={deleteHandler}>
        <DeleteIcon color="error" />
      </div>
    </section>
  );
};

export default Product;

