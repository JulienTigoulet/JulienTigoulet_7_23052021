const express = require('express');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const commentRoute = require('./routes/comment')
const app = express();
app.use(express.json())
app.use('/', userRoute);
app.use('/',postRoute);
app.use('/',commentRoute);

module.exports = app;