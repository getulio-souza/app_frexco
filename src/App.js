import React, { useState } from "react";
import "./App.css";
import Form from "./Telas/Produto/formProduct";

function App() {
  const [inputText, setInputText] = useState("");
  const [products, setProducts] = useState([]);

  return (
    <Form
      inputText={inputText}
      products={products}
      setProducts={setProducts}
      setInputText={setInputText}
    />
  );
}

export default App;
