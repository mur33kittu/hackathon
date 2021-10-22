const express = require ('express');
const eventBusController = require('./product-controller');
const router = express.Router ();

router.get ('/events', eventBusController.getEvents);

module.exports = router;
