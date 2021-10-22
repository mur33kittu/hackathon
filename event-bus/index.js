const express = require ('express');
const routes = require('./routes');

const app = express ();

app.use('/api', routes)

app.listen (3005, function (req, res) {
  console.log ('Products app is running in port 3005');
});
