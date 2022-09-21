require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const villainQueries = require('./database/villain-queries');

const port = process.env.PORT || 54321;
const app = express();

app.use(morgan('dev'));

app.get('/villains', (req, res) => {
  villainQueries.getVillains()
    .then((villains) => {
      res.json(villains);
    });
});

app.get('/villains/:id', (req, res) => {
  const id = req.params.id;

  villainQueries.getVillainById(id)
    .then((villain) => {
      res.json(villain);
    });
});

app.listen(port, () => {
  console.log(`the app is listening on port ${port}`);
});
