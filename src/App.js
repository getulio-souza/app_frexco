import React, { useState } from "react";
import "./App.css";
import Form from "./Telas/Produto/formProduct";
import ProductList from "./Telas/Produto/listProduct";
import {Container} from "@mui/material"

function App() {
  const [products, setProducts] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <Container>
    <Form
      inputText={inputText}
      products={products}
      setProducts={setProducts}
      setInputText={setInputText}
      />
      <ProductList SetProducts ={setProducts} products={products}/>
      </Container>
  );
}

export default App;
