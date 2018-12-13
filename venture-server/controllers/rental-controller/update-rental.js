module.exports = async (req, res) => {
  const Rental = require('../../models/Rental');

  let rental = new Rental(
    {
      id: req.body.id,
      owner_id: req.body.owner_id,
      address: req.body.address,
      availability: req.body.availability,
      category: req.body.category,
      deposit: req.body.deposit,
      description: req.body.description,
      general_location: req.body.general_location,
      item: req.body.item,
      picture: req.body.picture,
      price: req.body.price
    }
  );

  res.send(
    await rental.save()
  );
};
