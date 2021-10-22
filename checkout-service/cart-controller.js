const cartController = {
  getCartItems: function (req, res) {
    res.json ({cartItems: []});
  },
};


module.exports = cartController;