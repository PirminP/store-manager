const connection = require('./connection');

async function getAllProducts() {
  const [allProducts] = await connection
    .execute('SELECT id, name FROM StoreManager.products');
  return allProducts;
}

async function getProductById(id) {
  const [idProduct] = await connection
    .execute('SELECT id, name FROM StoreManager.products WHERE id = ?', [id]);
  return idProduct[0];
}

async function createProduct({ name }) {
  const [insertProduct] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  return { id: insertProduct.insertId, name };
}

async function updateProduct({ id, name }) {
  await connection
    .execute('UPDATE StoreManager.products SET name = ? WHERE id = ?', [name, id]);
  return { id, name };
}

async function deleteProduct(id) {
  await connection
    .execute('DELETE FROM StoreManager.products WHERE id = ?', [id]);
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};