const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

router.post('/', auth, multer, postCtrl.createPost);
router.get('/', auth, postCtrl.ShowAllPost);
router.get('/:uuid', auth, postCtrl.findOnePost);
router.delete('/:uuid', auth, postCtrl.deletePost);
router.put('/:uuid', auth, multer, postCtrl.modifyPost);
module.exports = router;