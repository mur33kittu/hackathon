const users = require ('./users.json');

const userController = {
  getUsers: function (req, res) {
    res.json ({user: users.find (user => user.userId === req.params.userId)});
  },
};

module.exports = userController;
