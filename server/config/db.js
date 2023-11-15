const mongoose = require('mongoose');

function ConnectDB() {
  mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
      console.log('Connected');
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = ConnectDB;
