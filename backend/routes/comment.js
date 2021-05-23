const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');

router.post('/comments', commentCtrl.createComment);
router.get('/comments', commentCtrl.ShowAllComment);
router.get('/comments:uuid', commentCtrl.findOneComment);
router.delete('/comments:uuid', commentCtrl.deleteComment);
router.put('/comments:uuid', commentCtrl.modifyComment);
module.exports = router;