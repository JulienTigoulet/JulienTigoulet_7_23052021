const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/users', userCtrl.signup);
// router.post('/users/login',userCtrl.login)
router.get('/users', userCtrl.showAllUsers);
router.get('/users:uuid', userCtrl.findOneUser);
router.delete('/users:uuid', userCtrl.deleteUser);

module.exports = router;
