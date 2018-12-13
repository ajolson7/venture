module.exports = async (req, res) => {
  const Rental = require("../../models/Rental");

  // get just one rental if there is only one id given; otherwise,
  // get all rentals requested if there are multiple id's given
  if (!Array.isArray(req.query.id)) {
    let rental = new Rental(
      {
        'id': req.query.id
      }
    );

    res.send(
      await rental.fetch({ require: true })
    );
  } else {
    let rentals = [];

    for (let i = 0; i < (req.query.id).length; i++) {
      let tempRental = new Rental({'id': req.query.id[i]});

      rentals.push(await tempRental.fetch({ require: true }));
    }

    res.send(rentals);
  }
};
