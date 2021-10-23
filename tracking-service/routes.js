const express = require ('express');
const trackingController = require('./tracking-controller');
const router = express.Router ();

router.post ('/tracking', trackingController.getTrackingNumber);

module.exports = router;
