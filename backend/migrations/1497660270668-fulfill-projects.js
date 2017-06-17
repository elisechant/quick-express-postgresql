
const path = require('path');
const db = require('./db');

const data = require('./data/projects');


exports.up = function(next) {

  const params = {
    id: data.id,
    name: data.name
  };

  console.log(params);

  const sql = 'INSERT INTO projects (id, name) VALUES ($(id), $(name))';

  db.exec(sql, params)
    .then(() => next())
    .catch((err) => {
      console.log("ERROR");
      console.log(err)
    });
};

exports.down = function(next) {
  let sql = 'TRUNCATE TABLE IF EXISTS projects';
  db.exec(sql)
    .then(() => next())
    .catch((err) => {
      console.log("ERROR");
      console.log(err)
    });
};
