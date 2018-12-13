const bookshelf = require('../config/bookshelf');

const Rental = bookshelf.Model.extend({
  tableName: 'rentals',
  hasTimestamps: true
});

module.exports = Rental;
