
const path = require('path');
const db = require('./db');


exports.up = function(next) {
  let file = path.join(__dirname, './scripts/teardown.sql');
  db.execFile(file)
    .then(() => next())
    .catch((err) => {
      console.log("ERROR");
      console.log(err)
    });
};

exports.down = function(next) {
  console.log("noop");
};
