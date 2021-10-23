const cartController = {
  getCartItems: function (req, res) {
    res.json ({cartItems: global.cart});
  },
  addToCart: function (req, res) {
    console.log(req.body);
    global.cart.push (req.body);
    res.json ({status: 'ok'});
  },
};

module.exports = cartController;
