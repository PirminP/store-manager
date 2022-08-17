const express = require('express');
const app = require('./app');

require('dotenv').config();
require('express-async-errors');

const productController = require('./controllers/productController');

app.use(express.json());

app.get('/products/:id', productController.getProductById);
app.get('/products', productController.getAllProducts);
app.post('/products', productController.createProduct);

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
