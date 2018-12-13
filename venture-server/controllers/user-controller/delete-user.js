module.exports = async (req, res) => {
  const User = require('../../models/User');

  let user = new User(
    {
      id: req.body.id
    }
  );

  res.send(
    await user.fetch({ require: true })
  );

  // TODO figure out how to do a soft delete
  user.destroy();
};
