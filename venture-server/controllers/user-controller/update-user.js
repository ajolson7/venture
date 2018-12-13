module.exports = async (req, res) => {
  const User = require('../../models/User');

  let user = new User(
    {
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
      name_first: req.body.name_first,
      name_middle: req.body.name_middle,
      name_last: req.body.name_last,
      email: req.body.email,
      phone: req.body.phone
    }
  );

  res.send(
    await user.save()
  );
};
