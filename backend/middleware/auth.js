// Authentification --> jsonwebtoken

const jwt = require('jsonwebtoken');
require('dotenv').config();
const db = {
  keyToken : process.env.KEY_TOKEN
}
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, `${db.keyToken}`);
    const userId = decodedToken.userId;
    if (req.body.user && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};