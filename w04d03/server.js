const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 54321;
const app = express();

const donuts = {
  'abc': {
    id: 'abc',
    name: 'Boston Cream',
    filling: 'custard',
    flavour: 'chocolate',
    sprinkles: false
  },
  'def': {
    id: 'def',
    name: 'Strawberry Jelly',
    filling: 'strawberry',
    flavour: 'kimchi',
    sprinkles: true
  },
};

app.use(morgan('dev'));
app.use(express.static('stuff-for-front-end'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// GET /donuts
app.get('/donuts', (req, res) => {
  // res.json(donuts);
  const donutArr = Object.values(donuts);
  res.json(donutArr);
});

// POST /donuts
app.post('/donuts', (req, res) => {
  const name = req.body.name;
  const filling = req.body.filling;
  const flavour = req.body.flavour;
  const id = Math.random().toString(36).substring(2, 5);

  const newDonut = {
    id,
    name,
    filling,
    flavour,
    sprinkles: true
  };

  donuts[id] = newDonut;
  console.log(donuts);

  res.status(201).send();
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
