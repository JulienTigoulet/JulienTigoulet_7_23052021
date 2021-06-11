const express = require('express');
const cors = require('cors');
const path = require('path');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const commentRoute = require('./routes/comment');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");
// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);
const app = express();
app.use(express.json())
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000
  });
  app.use("/api/", apiLimiter);
  
  const createAccountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 5, // start blocking after 5 requests
    message:
      "Too many accounts created from this IP, please try again after an hour"
  });
  app.post("/create-account", createAccountLimiter, function(req, res) {
    //...
  });
app.use(helmet());
app.use(cors())
// Backend images --> statique (path)
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/comments', commentRoute);

module.exports = app;