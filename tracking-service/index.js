const express = require ('express');
const routes = require ('./routes');
const bodyParser = require ('body-parser');

const cors = require ('cors');

const app = express ();
app.use (bodyParser ());
app.use (cors ());
app.use ('/api', routes);

app.listen (3007, function (req, res) {
  console.log ('Tracking app is running in port 3007');
});
