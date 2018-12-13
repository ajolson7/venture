const https = require('https');
const fs = require('fs');

module.exports = () => {
  const ventureExpressApp = require('./venture-express-app');
  const privateKey = fs.readFileSync('ssl-key-and-certificate/ssl-key.pem', 'utf8');
  const certificate = fs.readFileSync('ssl-key-and-certificate/ssl-certificate.pem', 'utf8');
  // console.log('priv key: ', privateKey);
  // console.log('cert: ', certificate);
  const credentials = {
    key: privateKey,
    cert: certificate
  };
  // console.log('creds: ', credentials);

  // console.log(https.createServer(credentials, ventureExpressApp).listen(3000));
  // https.createServer(credentials, ventureExpressApp).listen(3000, () => {
  //   console.log('Server is running on port 3000');
  // });

  ventureExpressApp.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
};
