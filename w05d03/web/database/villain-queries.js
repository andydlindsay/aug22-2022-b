const client = require('./connection');

const getVillains = () => {
  return client.query('SELECT * FROM movie_villains ORDER BY id;')
    .then((response) => {
      // const villains = response.rows;
      // return villains;
      return response.rows;
    });
};

const getVillainById = (id) => {
  return client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
    .then((response) => {
      const villain = response.rows[0];

      return villain;
    });
};

module.exports = {
  getVillainById,
  getVillains
};
