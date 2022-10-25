const { Router } = require('express');
const userController = require('./userController');
const router = Router();

router.post('/', userController.registerNewUser);

module.exports = router;
