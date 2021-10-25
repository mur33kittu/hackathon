const express = require ('express');
const paymentController = require('./payment-controller');
const router = express.Router ();

router.get ('/payments/:userId', paymentController.getPayments);

module.exports = router;
