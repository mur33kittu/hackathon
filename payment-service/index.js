const express = require ('express');
const routes = require('./routes');

const app = express ();

app.use('/api', routes)

app.listen (3001, function (req, res) {
  console.log ('Cart app is running in port 3001');
});
