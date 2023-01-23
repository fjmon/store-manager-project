
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(sinonChai);
const productService = require('../../../src/services/products.service');
const productController = require('../../../src/controllers/products.controller');
const {prodListMock, newProdMock} = require('../../../tests/products.mock');
const { it } = require('mocha');

describe('Teste de unidade do productController', function () {
  describe('Listando os products', function () {
    it('Retornar status 200 e lista', async function () {      
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, 'getAllProd')
        .resolves({ type: null, message: prodListMock });      
      await productController.getAllProd(req, res);      
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(prodListMock);
    });
  });
  
  describe('Busca produtos', function () {
    it('Responder com 200 e dados do banco se existir', async function () {     
      const res = {};
      const req = {
        params: { id: 1 },
      };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, 'getAllId')
        .resolves({ type: null, message: newProdMock });      
      await productController.getAllId(req, res);      
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(newProdMock);
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});

