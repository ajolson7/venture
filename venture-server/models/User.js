const bookshelf = require('../config/bookshelf');
const Rental = require('./Rental');

const User = bookshelf.Model.extend({
  tableName: 'users',
  rentals: function() {
    return this.hasMany(Rental, 'owner_id');
  },
  hasTimestamps: true
}, {
  dependents: ['rentals']
});

module.exports = User;
