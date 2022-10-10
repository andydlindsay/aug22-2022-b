const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const port = 3000;
const app = express();

// middleware
// app.use(cors()); // any server can make requests to this domain
app.use(morgan('dev'));
app.use(express.json()); // tell Express to use the JSON body-parser
app.use(express.urlencoded({ extended: false })); // tell Express to use the urlencoded body-parser
app.use(express.static('../client/build')); // tell Express where the static files live

const todoRouter = require('./routes/todo-router');

// routers
app.use('/todos', todoRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
