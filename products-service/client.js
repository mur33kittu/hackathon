'use strict';

const mongoose = require ('mongoose');

let connection = false;
const connect = {
  dbStatus: false,
  init: function () {
    if (!connection) {
      connection = mongoose.connect ('mongodb://localhost:27017/hackathon');
    }
  },
};

mongoose.connection.on ('connecting', function () {
  console.log ('connecting to mongoose');
  connect.dbStatus = false;
  connection = false;
});
mongoose.connection.on ('connected', function () {
  console.log ('connected to mongoose');
  connect.dbStatus = true;
  connection = true;
});
mongoose.connection.on ('error', function () {
  console.log ('error connecting to mongoose');
  connect.dbStatus = false;
  mongoose.disconnect ();
});
mongoose.connection.on ('disconnected', function () {
  console.log ('disconnecting from mongoose');
  connect.dbStatus = false;
  connection = false;
  setTimeout (connect.init, 60001);
  console.log ('disconnected from mongoose');
});

module.exports = connect;
