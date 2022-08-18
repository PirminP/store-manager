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
  if (!name) {
    return { error: { message: '"name" is required' }, code: 400 };
  }
  if (name.length < 5) {
    return { error: { message: '"name" length must be at least 5 characters long' }, code: 422 };
  }

  const insertProduct = await productModel.createProduct({ name });
  return { data: insertProduct, code: 201 };
}

async function updateProduct({ id, name }) {
  if (!name) {
    return { error: { message: '"name" is required' }, code: 400 };
  }
  if (name.length < 5) {
    return { error: { message: '"name" length must be at least 5 characters long' }, code: 422 };
  }

  const idProductCheck = await productModel.getProductById(id);
  if (!idProductCheck) {
    return { error: { message: 'Product not found' }, code: 404 };
  }

  const alteredProduct = await productModel.updateProduct({ id, name });
  return { data: alteredProduct, code: 200 };
}

async function deleteProduct(id) {
  const idProductCheck = await productModel.getProductById(id);
  if (!idProductCheck) {
    return { error: { message: 'Product not found' }, code: 404 };
  }

  await productModel.deleteProduct(id);
  return { code: 204 };
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};