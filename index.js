const express = require('express');
const { User, Category, Product, sequelize } = require('./models');

const app = express();
app.use(express.json());

// --- ENDPOINTS ---

// CRUD for Users
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});
app.put('/users/:id', async (req, res) => {
  await User.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "User updated" });
});
app.delete('/users/:id', async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.json({ message: "User deleted" });
});

// CRUD for Categories
app.post('/categories', async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
});
app.get('/categories', async (req, res) => {
  const categories = await Category.findAll({ include: Product });
  res.json(categories);
});

// CRUD for Products
app.post('/products', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});
app.get('/products', async (req, res) => {
  const products = await Product.findAll({ include: Category });
  res.json(products);
});

const PORT = 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
