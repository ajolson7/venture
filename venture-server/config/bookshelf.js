const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  }
});

const bookshelf = require('bookshelf')(knex);
const cascadeDelete = require('bookshelf-cascade-delete');
bookshelf.plugin(cascadeDelete);

module.exports = bookshelf;
