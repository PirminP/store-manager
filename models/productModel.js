const connection = require('./connection');

async function getAllProducts() {
  const [allProducts] = await connection.execute('SELECT id, name FROM StoreManager.products');
  return allProducts;
}

async function getProductById(id) {
  const [idProduct] = await connection
    .execute('SELECT id, name FROM StoreManager.products WHERE id = ?', [id]);
  return idProduct[0];
}

module.exports = { getAllProducts, getProductById };