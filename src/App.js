import React, { useState } from "react";
import "./App.css";
import Form from "./Telas/Produto/formProduct";
import ProductList from "./Telas/Produto/listProduct";
import { Container } from "@mui/material";
import EstoqueProdutos from "./Telas/Estoque/EstoqueProdutos.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  const [products, setProducts] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editProduct, setEditProduct] = useState(null);

  return (
    <Container>
      <Form
        inputText={inputText}
        products={products}
        setProducts={setProducts}
        setInputText={setInputText}
        editProduct={editProduct}
        setEditProduct ={setEditProduct}
        />
      <ProductList
        setProducts={setProducts}
        products={products}
        setEditProduct={setEditProduct}
        />
      <EstoqueProdutos/>
    </Container>
  );
}

export default App;
