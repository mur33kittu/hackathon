const express = require ('express');
const routes = require ('./routes');
const cors = require ('cors');

const app = express ();
app.use (cors ());

app.use ('/api', routes);

app.listen (3008, function (req, res) {
  console.log ('Orders and Returns app is running in port 3008');
});
