const paymentInformation = require('./payment.json');

const paymentController = {
  getPayments: function (req, res) {
    res.json ({paymentInformation: paymentInformation.find(payment => payment.userId === req.params.userId)});
  },
};


module.exports = paymentController;