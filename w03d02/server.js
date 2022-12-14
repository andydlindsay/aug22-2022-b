const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3005;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

const breads = {
  abcd: {
    name: 'rye',
    yeast: 5,
    flour: 3,
    expiryDate: 'Aug 22, 2022'
  },
  efgh: {
    name: 'baguette',
    yeast: 2,
    flour: 6,
    expiryDate: 'Oct 22, 2022'
  },
  ijkl: {
    name: 'sour dough',
    yeast: 1,
    flour: 5,
    expiryDate: 'Sep 9, 2022'
  },
  mnop: {
    name: 'NaN bread',
    yeast: 2,
    flour: 4,
    expiryDate: 'Sep 21, 2022'
  },
}; // add, edit, delete

// BROWSE - GET /breads
app.get('/breads', (req, res) => {
  const templateVars = {
    breads: breads
  };

  res.render('browse', templateVars);
});

// ADD - GET /breads/new
app.get('/breads/new', (req, res) => {
  res.render('new-bread-form');
});

// READ - GET /breads/:breadId
app.get('/breads/:breadId', (req, res) => {
  const breadId = req.params.breadId;

  const bread = breads[breadId];

  const templateVars = {
    bread: breads[breadId]
  };

  res.render('read', templateVars);
});

// EDIT - GET /breads/:breadId/edit
app.get('/breads/:breadId/edit', (req, res) => {
  const templateVars = {
    breadId: req.params.breadId,
    bread: breads[req.params.breadId]
  };

  res.render('edit-form', templateVars);
});

// EDIT - POST /breads/:breadId
app.post('/breads/:breadId', (req, res) => {
  const breadId = req.params.breadId;
  // console.log(req.body);
  const newBreadName = req.body.newBreadName;

  breads[breadId].name = newBreadName;

  // console.log(breads);

  res.redirect(`/breads/${breadId}`);
});

// ADD - POST /breads
app.post('/breads', (req, res) => {
  const name = req.body.name;
  const yeast = req.body.yeast;
  const flour = req.body.flour;
  const expiryDate = req.body.expiryDate;

  const newBread = {
    name: name,
    yeast: yeast,
    flour: flour,
    expiryDate: expiryDate
  };

  const newId = Math.random().toString(36).substring(2, 6);

  breads[newId] = newBread;

  console.log(breads);

  res.redirect('/breads');
});

// DELETE - POST /breads/:breadId/delete
app.post('/breads/:breadId/delete', (req, res) => {
  const breadId = req.params.breadId;

  delete breads[breadId];

  res.redirect('/breads');
});

// CATCHALL route
app.get('*', (req, res) => {
  res.send('page not found');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
