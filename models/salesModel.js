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

module.exports = { createSales, createSalesProduct };