
const options = {
  pgNative: true,
};

const pgp = require('pg-promise')(options);
const pg = require('pg');


const dbMiddleware = (poolsize = 10) => {
  pg.defaults.poolSize = poolsize;
  const db = pgp(process.env.DB_CONNECT);

  return (req, res, next) => {
    req.db = db;
    next();
  }
};

module.exports = dbMiddleware;
