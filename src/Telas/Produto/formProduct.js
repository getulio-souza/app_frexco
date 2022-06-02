import React, { useEffect } from "react";
import { Container, Typography, Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const formProduct = ({
  setInputText,
  products,
  setProducts,
  inputText,
  editProduct,
  setEditProduct,
}) => {
  //update product - (falta configurar o editar produto)
  const updateProduct = (text, id, completed) => {
    const newProduct = products.map((product) => {
      product.id === id ? { text, id, completed } : product;
    });
    setProducts(newProduct);
    setEditProduct("");
  };

  useEffect(() => {
    if (editProduct) {
      setInputText(editProduct.text);
    } else {
      setInputText("");
    }
  }, [setInputText, editProduct]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitProductHandler = (e) => {
    e.preventDefault();
    if (!editProduct) {
      setProducts([
        ...products,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    } else {
      updateProduct(input, editProduct.id, editProduct.completed);
    }
  };

  return (
    <Router>
      <div className="container_principal">
        {/* logo */}
        <img
          className="logo"
          src="https://www.frexco.com.br/_next/static/media/logo.27ca8367.png"
        />
        {/* header */}
        <Container className="title">
          <Typography variant="h4" align="center" margin="normal" gutterBottom>
            Preencha sua lista de compras
          </Typography>
        </Container>
        {/* campo de formulário */}
        <form className="search_form">
          <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            placeholder="insira um alimento"
            className="input_produto"
          />
          <div className="two_btns">
            <Button
              className="btn_produto"
              onClick={submitProductHandler}
              variant="contained"
              color="primary"
            >
              adicionar produto
            </Button>
            <Button
              className="btn_estoque"
              variant="contained"
              color="secondary"
            >
              <Link exact to="/Telas/Estoque/estoqueProdutos">Conferir estoque</Link>
            </Button>
          </div>
        </form>
      </div>
      <Routes>
        <Route path="/Telas/Estoque/estoqueProdutos"></Route>
      </Routes>
    </Router>
  );
};

export default formProduct;
