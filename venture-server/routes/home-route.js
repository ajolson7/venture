module.exports = ventureExpressApp => {
  const home = require('../controllers/home-controller/home');

  // console.log('here');
  ventureExpressApp.get('/', home);
};
