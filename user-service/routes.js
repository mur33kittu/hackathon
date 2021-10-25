const express = require ('express');
const userController = require('./user-controller');
const router = express.Router ();

router.get ('/users/:userId', userController.getUsers);

module.exports = router;
