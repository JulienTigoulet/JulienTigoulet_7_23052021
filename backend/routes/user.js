const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login',userCtrl.login);
router.get('/:uuid', userCtrl.findOneUser);
router.get('/', userCtrl.showAllUsers);
router.delete('/:uuid', userCtrl.deleteUser);

module.exports = router;
