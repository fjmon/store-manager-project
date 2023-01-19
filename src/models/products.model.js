const connection = require('./connection');

const getAllProd = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const getAllId = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

const addProd = async ({ name }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );
return { id: insertId, name };
};

const upProd = async (id, { name }) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id= ?',
    [name, id],
  );
};

const delProd = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = (?)', [id],
  );
};

module.exports = {
  getAllProd,
  getAllId,
  addProd,
  upProd,
  delProd,
};