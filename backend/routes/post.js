const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');

router.post('/posts', postCtrl.createPost);
router.get('/posts', postCtrl.ShowAllPost);
router.get('/posts:uuid', postCtrl.findOnePost);
router.delete('/posts:uuid', postCtrl.deletePost);
router.put('/posts:uuid', postCtrl.modifyPost);
module.exports = router;