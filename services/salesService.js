const productModel = require('../models/productModel');
const salesModel = require('../models/salesModel');

async function createSales(sales) {
  if (sales.find((sale) => sale.productId === undefined)) {
    return { error: { message: '"productId" is required' }, code: 400 };
  }

  if (sales.find((sale) => sale.quantity === undefined)) {
    return { error: { message: '"quantity" is required' }, code: 400 };
  }

  if (sales.find((sale) => sale.quantity < 1)) {
    return { error: { message: '"quantity" must be greater than or equal to 1' }, code: 422 };
  }

  const validateProduct = await Promise
    .all(sales.map((sale) => productModel.getProductById(sale.productId)));
  if (validateProduct.includes(undefined)) {
    return { error: { message: 'Product not found' }, code: 404 };
  }

  const saleId = await salesModel.createSales();
  await Promise
    .all(sales.map((sale) => salesModel.createSalesProduct(saleId, sale.productId, sale.quantity)));
  return { data: { id: saleId, itemsSold: sales }, code: 201 };
}

async function getAllSales() {
  const allSales = await salesModel.getAllSales();
  if (!allSales || allSales.length === 0) {
    return { error: { message: 'Sale not found' }, code: 404 };
  }
  return { data: allSales, code: 200 };
}

async function getSalebyId(id) {
  const idSale = await salesModel.getSalebyId(id);
  if (!idSale || idSale.length === 0) {
    return { error: { message: 'Sale not found' }, code: 404 };
  }
  return { data: idSale, code: 200 };
}

module.exports = {
  createSales,
  getAllSales,
  getSalebyId,
};