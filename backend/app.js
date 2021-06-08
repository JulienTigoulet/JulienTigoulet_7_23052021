const express = require('express');
const cors = require('cors');
const path = require('path');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const commentRoute = require('./routes/comment');

const app = express();
app.use(express.json())
app.use(cors())
// Backend images --> statique (path)
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/comments', commentRoute);

module.exports = app;