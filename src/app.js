const express = require('express');
const products = require('./models/products.model');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
app.get('/products', async (req, res) => {
  const result = await products.getAll();
  res.status(200).json(result);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const result = await products.getById(id);
  if (!result) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(result);
});

app.post('/products', async (req, res) => {
  const name = req.body;
  const result = await products.addProduct(name);
  res.status(201).json(result);
});

module.exports = app;
