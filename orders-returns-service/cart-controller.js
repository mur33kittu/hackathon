// import Orders from './orders.json'
const Orders = require ('./orders.json');
const OrdersController = {
  getOrders: function (req, res) {
    res.json ({orders: Orders});
  },
};

module.exports = OrdersController;
