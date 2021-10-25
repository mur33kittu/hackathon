const express = require ('express');
const routes = require('./routes');

const app = express ();

app.use('/api', routes)

app.listen (3010, function (req, res) {
  console.log ('Payment service is running in port 3010');
});
