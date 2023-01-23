
const { expect } = require('chai');
const sinon = require('sinon');
const productService = require('../../../src/services/products.service');
const productModel = require('../../../src/models/products.model');
const { allProds } = require('../../../tests/products.mock');

describe('Verificando service de product', function () {
  describe('listagem de products', function () {
    it('retorna a lista completa de products', async function () {
      sinon.stub(productModel, 'getAllProd').resolves(allProds);
      const result = await productService.getAllProd();
      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(allProds);
    });

    it('retorna o product caso ID existente', async function () {
      sinon.stub(productModel, 'getAllId').resolves(allProds[0]);
      const result = await productService.getAllId(1);
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(allProds[0]);
    });

    afterEach(function () {
      sinon.restore();
    });
  });
});

