const productService = require('../services/productService');

async function getAllProducts(req, res) {
  const allProducts = await productService.getAllProducts();
  if (!allProducts) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(allProducts);
}

async function getProductById(req, res) {
  const { id } = req.params;
  const idProduct = await productService.getProductById(id);
  if (!idProduct) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(idProduct);
}

module.exports = { getAllProducts, getProductById };