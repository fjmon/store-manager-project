const express = require('express');

const productsRouter = express.Router();
const productsController = require('../controllers/products.controller');
const middlewares = require('../middlewares/validador');

productsRouter.get('/', productsController.getAllProd);
productsRouter.get('/:id', productsController.getAllId);
productsRouter.post('/', middlewares.valNameProd, productsController.addProd);

module.exports = productsRouter;