import React, {useEffect} from 'react'
import { Container, Typography, Button } from '@mui/material';
import {} from ""

const formProduct = ({setInputText, products, setProducts, inputText, editProduct, setEditProduct}) => {

  //update product - (falta configurar o editar produto)
  const updateProduct = (text, id, completed) => {
    const newProduct = products.map((product) => {
      product.id === id ? { text, id, completed } : product
    })
    setProducts(newProduct);
    setEditProduct("");
  };


  useEffect(() => {
    if (editProduct) {
      setInputText(editProduct.text);
    }
    else {
      setInputText("");
    }
  }, [setInputText, editProduct]);


  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  };

  const submitProductHandler = (e) => {
    e.preventDefault();
    if (!editProduct) {
      setProducts([
        ...products, { text: inputText, completed: false, id: Math.random() * 1000 }
      ]);
      setInputText("");
    }
    else {
      updateProduct(input, editProduct.id, editProduct.completed)
    }
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
        <div className='two_btns'>
        <Button
          onClick={submitProductHandler}
          variant="contained" color="primary">
              adicionar produto
        </Button>
        <Button variant="contained" color="secondary">Conferir estoque</Button>
            </div>
      </form>
    </div>
  )
}

export default formProduct