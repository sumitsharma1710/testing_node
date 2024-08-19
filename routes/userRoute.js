const express = require('express');

const router = express.Router();

const userCtrl = require('./../controller/userController');

router.get('/', userCtrl.userList);

module.exports = router;