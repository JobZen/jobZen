const jwt = require('jsonwebtoken');
const secretKey = 'choko'; 

function generateToken(userId,userName) {
  const expiresIn = 60 * 60 * 24; 
  const token = jwt.sign({ userId  ,userName}, secretKey, { expiresIn })
  return token;
}

module.exports = { generateToken };