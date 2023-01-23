const prods = [{
  id: 1,
  name: 'Martelo de Thor',
},
{
  id: 2,
  name: 'Traje de encolhimento',
},
{
  id: 3,
  name: 'Escudo do Capitão América',
}
];

const invalidValue = 'a';
const valName = 'ProdutoX';

const allProds = [{
  id: 1,
  name: valName,
},];

const prodMock = {
  name: 'Martelo de Thor',
};

const newProdMock = {
  id: 1,
  ...prodMock
};

const prodListMock = [newProdMock];

module.exports = {
  prods,
  allProds,
  valName,
  prodListMock,
  newProdMock,
  prodMock,
  invalidValue,
};

