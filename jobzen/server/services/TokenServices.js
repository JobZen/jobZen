const jwt = require('jsonwebtoken');
const secretKey = 'samotame'; // Replace with your secret key

function generateToken(userId) {
  const expiresIn = 60 * 60 * 24; // Token expiration time (e.g., 24 hours)
  return jwt.sign({ userId }, secretKey, { expiresIn });
}

module.exports = { generateToken };