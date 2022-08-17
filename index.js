const express = require('express');
const app = require('./app');
require('dotenv').config();

const productController = require('./controllers/productController');

app.use(express.json());

app.use('/products/:id', productController.getProductById);
app.use('/products', productController.getAllProducts);

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
