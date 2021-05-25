const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');

router.post('/', auth, postCtrl.createPost);
router.get('/', auth, postCtrl.ShowAllPost);
router.get('/:uuid', auth, postCtrl.findOnePost);
router.delete('/:uuid', auth, postCtrl.deletePost);
router.put('/:uuid', auth, postCtrl.modifyPost);
module.exports = router;