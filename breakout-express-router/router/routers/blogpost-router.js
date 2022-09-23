const express = require('express');
const router = express.Router();
const pool = require('../db/connection');

// GET /blogposts/
router.get('/', (req, res) => {
  pool.query('SELECT * FROM posts ORDER BY id;')
    .then((response) => {
      res.json(response.rows);
    });
});

// GET /blogposts/:id
router.get('/:id', (req, res) => {
  pool.query('SELECT * FROM posts WHERE id = $1;', [req.params.id])
    .then((response) => {
      res.json(response.rows[0]);
    });
});

module.exports = router;
