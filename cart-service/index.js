const express = require ('express');
const routes = require ('./routes');
const app = express ();

global.cart = [];
app.use ('/api', routes);

app.listen (3003, function (req, res) {
  console.log ('Cart app is running in port 3003');
});
