
const path = require('path');
const db = require('./db');


exports.up = function(next) {
  let file = path.join(__dirname, './scripts/projects.sql');
  db.execFile(file)
    .then(() => next())
    .catch((err) => {
      console.log("ERROR");
      console.log(err)
    });
};

exports.down = function(next) {
  let sql = 'DROP TABLE IF EXISTS dashboards';
  db.exec(sql)
    .then(() => next())
    .catch((err) => {
      console.log("ERROR");
      console.log(err)
    });
};
