const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');

router.post('/', auth, commentCtrl.createComment);
router.get('/', auth, commentCtrl.ShowAllComment);
router.get('/:uuid', auth, commentCtrl.findOneComment);
router.delete('/:uuid', auth, commentCtrl.deleteComment);
router.put('/:uuid', auth, commentCtrl.modifyComment);
module.exports = router;