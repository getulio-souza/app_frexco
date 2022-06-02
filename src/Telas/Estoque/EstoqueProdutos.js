import React from "react";
import { Typography, Button, TableHead, TableRow } from "@mui/material";
import { FormLabel, Input, InputLabel, TableBody } from "@mui/material";
import { Container } from "@mui/system";

function EstoqueProdutos() {

  //estoque dinâmico
  const addEstoque = (event) => {
    // event.preventDefault();
    const formData = event.target;
    const addProduct = {
      alimento: formData.alimento.value,
      preco: formData.preco.value,
      quantidade:formData.quantidade.preco
      };
      
  };

  return (
    <FormLabel onSubmit={addEstoque} className="estoque_container">
      <Typography
        className="estoque_title"
        variant="h4"
        color="white"
        marginTop={10}>
        Estoque de alimentos
      </Typography>

      {/*infos*/}
      <Container className="user_info">

        {/*Alimento*/}
        <InputLabel className="alimento_text">
          <h4>Tipo de alimento:</h4>
        </InputLabel>
        <Input
          className="background_input"
          placeholder="Digite o nome do alimento"
          type="search"
          name="alimento"
          ></Input>

        {/*Preço*/}
        <InputLabel className="price_text">
          <h4>Preço:</h4>
        </InputLabel>
        <Input
          className="background_input"
          type=""
          placeholder="Digite o valor em reais"
          name="preco"
          ></Input>

        {/*Preço*/}
        <InputLabel>
          <h4>Quantidade:</h4>
        </InputLabel>
        <Input
          className="background_input"
          type="number"
          placeholder="Digite a quantidade "
          name="quantidade"
          ></Input>
        
         <div className="btn_action">    
        <Button variant="contained">
          Adicionar ao estoque
        </Button>
        </div>
      </Container>
      {/* table */}
      <TableBody >
        <TableRow>
          <TableHead>
            Alimento
          </TableHead>
          <TableHead>
            Preço
          </TableHead>
          <TableHead>
            Quantidade
          </TableHead>
        </TableRow>
      </TableBody>
      </FormLabel>
  );
}

export default EstoqueProdutos;


//https://www.youtube.com/watch?v=0UNNThVWXr0&t=676s 25:19 - testar o console.log pra ver se tá puxando os dados do formulário 