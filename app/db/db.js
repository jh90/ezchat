if (!process.env.DATABASE_URL) {
  require('dotenv').config();
}

const pgp = require('pg-promise')();
const url = process.env.DATABASE_URL;

const db = pgp(url);

module.exports = db;
