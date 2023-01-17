const productService = require('../services/products.service');

const getAllProd = async (_req, res) => {
  const { message } = await productService.getAllProd();
  return res.status(200).json(message);
};
const getAllId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getAllId(id);
  if (type || !message) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(message);
};
const addProd = async (req, res) => {
  const name = req.body;
  const { type, message } = await productService.addProd(name);
  if (type) {
    return res.status(type).json(message);
  }
  return res.status(201).json(message);
};
const delProd = async (req, res) => {
  const { id } = req.params;
  const { type } = await productService.delProd(id);
  if (type) return res.status(type).json({ message: 'Product not found' });
  return res.sendStatus(204);
};

module.exports = {
  getAllProd,
  getAllId,
  addProd,
  delProd,
};
