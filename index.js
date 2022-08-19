const express = require('express');
const app = require('./app');

require('dotenv').config();
require('express-async-errors');

const productController = require('./controllers/productController');
const salesController = require('./controllers/salesController');

app.use(express.json());

app.get('/products/:id', productController.getProductById);
app.get('/products', productController.getAllProducts);
app.post('/products', productController.createProduct);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);
app.get('/sales/:id', salesController.getSalebyId);
app.get('/sales', salesController.getAllSales);
app.post('/sales', salesController.createSales);

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
