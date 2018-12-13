module.exports = ventureExpressApp => {
  const createRental = require('../controllers/rental-controller/create-rental');
  const getRentals = require('../controllers/rental-controller/get-rentals');
  const getAllRentals = require('../controllers/rental-controller/get-all-rentals');
  const updateRental = require('../controllers/rental-controller/update-rental');
  const deleteRental = require('../controllers/rental-controller/delete-rental');

  ventureExpressApp.post('/rental/create-rental', createRental);
  ventureExpressApp.get('/rental/get-rentals', getRentals);
  ventureExpressApp.get('/rental/get-all-rentals', getAllRentals);
  ventureExpressApp.put('/rental/update-rental', updateRental);
  ventureExpressApp.post('/rental/delete-rental', deleteRental);
};
