const express = require ('express');
const ordersController = require('./orders-controller');
const router = express.Router ();

router.get ('/orders', ordersController.getOrders);

module.exports = router;
