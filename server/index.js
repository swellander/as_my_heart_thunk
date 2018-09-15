const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const db = require('./db');

app.use(express.static('dist'))
app.use(express.static('public'))
app.use(express.json())

app.get('/api/products', (req, res, next) => {
  db.Product.findAll()
    .then(products => res.json(products));
});

app.post('/api/products', (req, res, next) => {
  console.log('Woo')
  db.Product.create(req.body)
    .then(product => res.json(product))
    .catch(next)
})

app.delete('/api/products/:id', (req, res, next) => {
  db.Product.findById(req.params.id)
    .then(product => product.destroy())
    .then(() => res.sendStatus(202))
})

const init = () => (
  db.syncSeed()
    .then(() => {
      app.listen(port, () => console.log('Check it on ', port))
    })
)

init();

