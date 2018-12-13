module.exports = async (req, res) => {
  const Rental = require('../../models/Rental');

  let rental = new Rental(
    {
      id: req.body.id
    }
  );

  res.send(
    await rental.fetch({ require: true })
  );

  // TODO figure out how to do a soft delete
  rental.destroy();
};
