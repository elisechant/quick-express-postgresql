
require('dotenv').config({silent: true});
const pgp = require('pg-promise');

class Db {
  constructor() {
    this.init()
  }
  init() {
    let options = {};
    this.pgp = pgp(options);
    this.conn = this.pgp(process.env.DB_CONNECT);
  }
  loadSQL(file) {
    return new this.pgp.QueryFile(file, {minify: false});
  }
  execFile(file) {
    let sql = this.loadSQL(file);
    console.log(sql);
    return this.conn.none(sql);
  }
  exec(sql, params = {}) {
    console.log(sql);
    return this.conn.none(sql, params);
  }
}

const db = new Db();

module.exports = db;
