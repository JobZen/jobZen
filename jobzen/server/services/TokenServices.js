const jwt = require('jsonwebtoken');
const secretKey = 'choko'; // Replace with your secret key

function generateToken(userId,userName) {
  const expiresIn = 60 * 60 * 24; // Token expiration time (e.g., 24 hours)
  return jwt.sign({ userId ,role ,userName}, secretKey, { expiresIn });
}

module.exports = { generateToken };