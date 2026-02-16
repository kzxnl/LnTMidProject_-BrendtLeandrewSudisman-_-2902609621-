const { Sequelize, DataTypes } = require('sequelize');

// Update with your local database credentials
const sequelize = new Sequelize('cms_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql' 
});

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true }
});

const Category = sequelize.define('Category', {
  name: { type: DataTypes.STRING, allowNull: false }
});

const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER }
});

// One-to-Many Relationship: Category has many Products
Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = { User, Category, Product, sequelize };
