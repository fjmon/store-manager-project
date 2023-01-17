const products = require('../models/products.model');

const getAllProd = async () => {
  const result = await products.getAllProd();
  return { type: null, message: result };
};
const getAllId = async (id) => {
  const result = await products.getAllId(id);
  if (!result) return { type: 404, message: 'Product not found' };
  return { type: null, message: result };
};
const addProd = async (name) => {
  const result = await products.addProd(name);
  return { type: null, message: result };
};

module.exports = {
  getAllProd,
  getAllId,
  addProd,
};
