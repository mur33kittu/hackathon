const express = require ('express');
const routes = require ('./routes');
var cors = require ('cors');
const client = require('./client');

const app = express ();

client.init();

app.use (cors ());
app.use ('/api', routes);

app.listen (3006, function (req, res) {
  console.log ('Products app is running in port 3006');
});
