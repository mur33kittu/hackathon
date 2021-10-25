const express = require ('express');
const routes = require('./routes');

const app = express ();

app.use('/api', routes)

app.listen (3009, function (req, res) {
  console.log ('users service app is running in port 3009');
});
