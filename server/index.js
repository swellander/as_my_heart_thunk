const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const db = require('./db');

app.get('/', (req, res, next) => {
  res.send('hey')
});

const init = () => (
  db.syncSeed()
    .then(() => {
      app.listen(port, () => console.log('Check it on ', port))
    })
    .catch(err => {
      throw err;
    })
)

init();

