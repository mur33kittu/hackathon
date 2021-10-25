const products = require ('./products.json');

const productsController = {
  getProducts: function (req, res) {
    res.json ({products: products});
  },
};

module.exports = productsController;
