const { Router } = require('express');
const { adminsController } = require('../controllers/admins.controller');

const router = Router();

router.post('/admins', adminsController.registerAdmin);
router.post('/admins/login', adminsController.login);

module.exports = router