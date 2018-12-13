module.exports = ventureExpressApp => {
  const createUser = require('../controllers/user-controller/create-user');
  const getUsers = require('../controllers/user-controller/get-users');
  const getAllUsers = require('../controllers/user-controller/get-all-users');
  const updateUser = require('../controllers/user-controller/update-user');
  const deleteUser = require('../controllers/user-controller/delete-user');

  ventureExpressApp.post('/user/create-user', createUser);
  ventureExpressApp.get('/user/get-users', getUsers);
  ventureExpressApp.get('/user/get-all-users', getAllUsers);
  ventureExpressApp.put('/user/update-user', updateUser);
  ventureExpressApp.post('/user/delete-user', deleteUser);
};
