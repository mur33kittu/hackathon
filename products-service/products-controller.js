// const products = require ('./products.json');
const mongoose = require('mongoose');
const mongoService = require ('./mongoService');
const products = require ('./products.model');

const productsController = {
  getProducts: function (req, res, next) {
    const query = req.query;
    mongoService
      .find ('products', products, query, {}, req)
      .then (products => res.json ({products: products}))
      .catch ((err) => {
        console.log(err);
        res.json ([])
      });
    // res.json ({products: products});
  },
};

module.exports = productsController;
