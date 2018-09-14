const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const db = require('./db');

app.use(express.static('dist'))
app.use(express.static('public'))

app.get('/', (req, res, next) => {
  db.Product.findAll()
    .then(products => res.json(products));
});

const init = () => (
  db.syncSeed()
    .then(() => {
      app.listen(port, () => console.log('Check it on ', port))
    })
)

init();

