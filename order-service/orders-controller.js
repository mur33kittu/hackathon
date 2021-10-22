const ordersController = {
  getOrders: function (req, res) {
    res.json ({orders: []});
  },
};


module.exports = ordersController;