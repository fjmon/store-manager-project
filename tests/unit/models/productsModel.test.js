
const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../src/models/products.model');
const connection = require('../../../src/models/connection');
const { prods } = require('../../../tests/products.mock');

describe('Testes de unidade do model de produtos', function () {
  it('Busca por todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([prods]);
    const result = await productModel.getAllProd();
    expect(result).to.be.deep.equal(prods);
  });

  it('Busca o produto pelo Id', async function () {
    sinon.stub(connection, 'execute').resolves([[prods[0]]]);
    const result = await productModel.getAllId(1);
    expect(result).to.be.deep.equal(prods[0]);
  });

  afterEach(function () {
    sinon.restore();
  });
});

