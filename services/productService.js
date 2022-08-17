const productModel = require('../models/productModel');

async function getAllProducts() {
  const allProducts = await productModel.getAllProducts();
  if (!allProducts) {
    return { error: { message: 'Product not found' }, code: 404 };
  }
  return { data: allProducts, code: 200 };
}

async function getProductById(id) {
  const idProduct = await productModel.getProductById(id);
  if (!idProduct) {
    return { error: { message: 'Product not found' }, code: 404 };
  }
  return { data: idProduct, code: 200 };
}

async function createProduct({ name }) {
  const insertProduct = await productModel.createProduct({ name });
  return { data: insertProduct, code: 201 };
}

module.exports = { getAllProducts, getProductById, createProduct };