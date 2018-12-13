module.exports = async (req, res) => {
  const User = require("../../models/User");

  // get just one user if there is only one id given; otherwise,
  // get all users requested if there are multiple id's given
  if (!Array.isArray(req.query.id)) {
    let user = new User(
      {
        'id': req.query.id
      }
    );

    res.send(
      await user.fetch({ require: true })
    );
  } else {
    let users = [];

    for (let i = 0; i < (req.query.id).length; i++) {
      let tempUser = new User({'id': req.query.id[i]});

      users.push(await tempUser.fetch({ require: true }));
    }

    res.send(users);
  }
};
