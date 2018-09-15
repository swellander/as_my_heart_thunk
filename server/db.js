const Sequelize = require('sequelize');
const faker = require('faker');
const conn = new Sequelize(
  process.env.DATABASE_URL ||
  'postgres://localhost/junk',
  { logging: false }
);

//helper function
const getRandomRating = () => {
  return Math.ceil(Math.random() * 10);
}

const Product = conn.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  rating: Sequelize.INTEGER
});

const syncSeed = () => {
  return conn.sync({ force: true })
    .then(() => Promise.all([
      Product.create({ name: faker.commerce.productName(), rating: getRandomRating() }),
      Product.create({ name: faker.commerce.productName(), rating: getRandomRating() }),
      Product.create({ name: faker.commerce.productName(), rating: getRandomRating() }),
    ]))
    .catch(err => console.log(err))
};

module.exports = {
  Product,
  syncSeed
}