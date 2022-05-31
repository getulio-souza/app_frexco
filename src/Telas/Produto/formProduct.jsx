import React from 'react'
import { Container, Typography, Button } from '@mui/material';

const formProduct = () => {
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
              type="text"
              placeholder="insira um alimento"
              className="input_produto"
             
            />
            <Button variant="contained" color="primary">
              adicionar
            </Button>
            {/* filtro */}
            <div className="select">
              <select name="products" className="filter-product">
                <option value="all">Todos</option>
                <option value="all">Adicionados</option>
                <option value="all">Removidos</option>
              </select>
            </div>
          </form>
          </div>
  )
}

export default formProduct