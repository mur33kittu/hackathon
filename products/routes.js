const express = require ('express');
const productsController = require('./products-controller');
const router = express.Router ();

router.get ('/products', productsController.getProducts);

module.exports = router;
