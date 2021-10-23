import axios from 'axios';

const ordersController = {
  getOrders: function (req, res) {
    res.json ({orders: []});
  },
  postOrder: async function (req, res) {
    const order = req.body;

    // send to cart

    await axios
      .post ('http://localhost:3003/api/addToCart', order, function (req, res) {
        res.send ('Added to Cart');
      })
      .catch (res.send ('Error sending to Cart'));
  },
};

module.exports = ordersController;
