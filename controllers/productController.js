const productService = require('../services/productService');

async function getAllProducts(req, res) {
  const { data, error, code } = await productService.getAllProducts();
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
}

async function getProductById(req, res) {
  const { id } = req.params;
  const { data, error, code } = await productService.getProductById(id);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
}

async function createProduct(req, res) {
  const { data, error, code } = await productService.createProduct({ ...req.body });
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
}

async function updateProduct(req, res) {
  const { data, error, code } = await productService.updateProduct({ ...req.params, ...req.body });
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  const { data, error, code } = await productService.deleteProduct(id);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};