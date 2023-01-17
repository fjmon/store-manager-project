const express = require('express');

const salesRouter = express.Router();
const salesController = require('../controllers/sales.controller');
const middlewares = require('../middlewares/validador');

salesRouter.get('/', salesController.getAll);
salesRouter.get('/:id', salesController.getById);
salesRouter.post('/', middlewares.valSale,
  middlewares.valProdId, salesController.newProduct);

module.exports = salesRouter;