const express = require ('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express ();
app.use(bodyParser.json());
app.use('/api', routes)

app.listen (3002, function (req, res) {
  console.log ('Orders app is running in port 3002');
});
