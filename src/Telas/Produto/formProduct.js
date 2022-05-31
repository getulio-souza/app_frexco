import React from 'react'
import { Container, Typography, Button } from '@mui/material';
import ProductList from './listProduct';

const formProduct = ({setInputText, products, setProducts, inputText}) => {

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value)
  };
  const submitProductHandler = (e) => {
    e.preventDefault();
    setProducts([
      ...products, { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  };

  return (
    <div className="container_principal">
     {/* logo */}
          <img className="logo"
            src="https://www.frexco.com.br/_next/static/media/logo.27ca8367.png"
            />
     {/* header */}
     <Container className="title">
            <Typography
              variant="h4"
              align="center"
              margin="normal"
              gutterBottom
            >
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
        <Button
          onClick={submitProductHandler}
          variant="contained" color="primary">
              adicionar
        </Button>
      </form>
          </div>
  )
}

export default formProduct