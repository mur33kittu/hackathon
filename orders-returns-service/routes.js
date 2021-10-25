const express = require ('express');
const OrdersController = require('./cart-controller');
const router = express.Router ();

router.get ('/ordersandreturns', OrdersController.getOrders);

module.exports = router;
