module.exports = async (req, res) => {
  const Rental = require('../../models/Rental');

  res.send(
    await Rental.fetchAll()
  );
};
