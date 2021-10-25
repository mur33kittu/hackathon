const express = require ('express');
const trackingController = require('./tracking-controller');
const router = express.Router ();

router.post ('/tracking', trackingController.getTrackingNumber);
router.get ('/tracking/:trackingNumber', trackingController.getTrackingInformation);

module.exports = router;
