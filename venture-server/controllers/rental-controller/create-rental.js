module.exports = async (req, res) => {
  const uuidv1 = require('uuid/v1');
  const Rental = require('../../models/Rental');

  let rental = new Rental(
    {
      id: uuidv1(),
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
    await rental.save(null, {method: 'insert'})
  );
};
