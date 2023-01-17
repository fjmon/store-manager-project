const haId = require('../models/products.model');

const valNameProd = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  return next();
};

const valSale = (req, res, next) => {
  const prodId = req.body;
  const haProdId = prodId.every((product) => product.prodId);
  const quant = prodId.every((product) => product.quantity !== null
    && product.quantity !== undefined);
  const upperZero = prodId.every((product) => product.quantity > 0);
  if (!haProdId) return res.status(400).json({ message: '"productId" is required' });
  if (!quant) return res.status(400).json({ message: '"quantity" is required' });
  if (!upperZero) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  return next();
};

const valProdId = async (req, res, next) => {
  const prodId = req.body;
  const haProd = await haId.getAll();
  const extId = haProd.map((ex) => ex.id);
  const haProdId = prodId.every((product) => extId.includes(product.prodId));
  if (!haProdId) return res.status(404).json({ message: 'Product not found' });
  return next();
};

module.exports = {
  valNameProd,
  valSale,
  valProdId,
};