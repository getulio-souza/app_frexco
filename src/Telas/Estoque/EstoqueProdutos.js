import React, { createRef, useState } from "react";
import {
  Typography,
  Button,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  FormGroup,
  Table,
} from "@mui/material";
import { FormLabel, Input, InputLabel, TableBody } from "@mui/material";
import { Container } from "@mui/system";

function EstoqueProdutos() {
  // typeof [stateData, stateUpdateFunction] = useState[initialData]
  const initialValue = [];
  const [products, setProduct] = useState(initialValue);

  //primeira referência
  const formData = createRef();

  //estoque dinâmico
  const addEstoque = (event) => {
    event.preventDefault();

    const addProduct = {
      alimento: formData.alimento.current.value,
      preco: formData.preco.current.value,
      quantidade: Number (formData.current.quantidade.value),
    };

    //adiciona um novo alimento dentro do array de alimentos
    setProduct([...products, addProduct]);
  };

  //aumenta a quantidade de alimentos (+1)
  const increQty = (event) => {
    const indexOfArray = event.target.value;
    products[indexOfArray].quantidade = products[indexOfArray].quantidade + 1;
    setProduct([...products])
  };

  //reduz a quantidade de alimentos (-1)
  const decreQty = (event) => {
    const indexOfArray = event.target.value;
    products[indexOfArray].quantidade = products[indexOfArray].quantidade - 1;
    setProduct([...products])
  };

  return (
    <div>
    <FormGroup onSubmit={addEstoque} ref={formData}>
      <FormLabel className="estoque_container">
        <Typography
          className="estoque_title"
          variant="h4"
          color="white"
          marginTop={10}
          >
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
            <Button variant="contained">Adicionar ao estoque</Button>
          </div>
        </Container>
        {/* table - boostrap */}
        <Table className="table_container">
          <tbody>
            <tr>
              <th>Index</th>
              <th>Nome do alimento</th>
              <th>Preço</th>
              <th>Quantidade</th>
            </tr>
          </tbody>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.alimento}</td>
                  <td>{item.preco}</td>
                  <td>{item.quantidade}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={(event) => increQty(event)}
                      ref={incIndex}
                      value={index}
                      >
                      +
                    </Button>
                    <Button variant="danger" onClick={event => decreQty(event)} value={index}>
                      -
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </FormLabel>
    </FormGroup>
    </div>
  );
}

export default EstoqueProdutos;

//https://www.youtube.com/watch?v=0UNNThVWXr0&t=676s 25:19 - testar o console.log pra ver se tá puxando os dados do formulário 47:24
