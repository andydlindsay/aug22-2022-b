const express = require('express');
// import express from 'express';
const router = express.Router();

// fake data
let todos = [
  {
    id: 'abcd',
    todo: 'Laundry'
  },
  {
    id: 'efgh',
    todo: 'Make stuffing'
  },
];

// endpoints
// GET /todos/
router.get('/', (req, res) => {
  // res.cookie('hello', 'world');
  res.json(todos);
});

// POST /todos/
router.post('/', (req, res) => {
  const todo = req.body.todo;
  const id = Math.random().toString(36).substring(2, 6);

  const newTodo = {
    id,
    todo
  };

  todos.push(newTodo);
  console.log(todos);

  // res.json({ success: true });
  // res.send();

  res.json(newTodo);
});

// DELETE /todos/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  const filteredTodos = todos.filter((todo) => {
    if (todo.id === id) {
      return false;
    }

    return true;
  });

  todos = filteredTodos;

  res.json({ success: true });
});

// export the router
module.exports = router;
