const productModel = require('../models/productModel');

async function getAllProducts() {
  const allProducts = await productModel.getAllProducts();
  return allProducts;
}

async function getProductById(id) {
  const idProduct = await productModel.getProductById(id);
  return idProduct;
}

module.exports = { getAllProducts, getProductById };