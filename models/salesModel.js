const connection = require('./connection');

async function createSales() {
  const [insertSales] = await connection
    .execute('INSERT INTO StoreManager.sales VALUES ()');
  return insertSales.insertId;
}

async function createSalesProduct(saleId, productId, quantity) {
  await connection
    .execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [saleId, productId, quantity],
    );
  return true;
}

async function getAllSales() {
  const queryAll = [
    'SELECT id AS saleId, date, product_id AS productId, quantity',
    'FROM StoreManager.sales',
    'INNER JOIN StoreManager.sales_products ON id = sale_id',
  ].join(' ');
  const [allSales] = await connection.execute(queryAll);
  return allSales;
}

async function getSalebyId(id) {
  const queryId = [
    'SELECT date, product_id AS productId, quantity',
    'FROM StoreManager.sales',
    'INNER JOIN StoreManager.sales_products ON id = sale_id',
    'WHERE id = ?',
  ].join(' ');
  const [idSale] = await connection.execute(queryId, [id]);
  return idSale;
}

module.exports = {
  createSales,
  createSalesProduct,
  getAllSales,
  getSalebyId,
};