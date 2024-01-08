const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.body.token;

  if (!token) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    next();
  });
}
const admin = async (req, res, next) => {
  try {
    const role=req.body.role
    if (role === "admin") {
        return next();
      }
    return res.status(403).send({
          message: "Admin not found!",
        })
    }
  catch (error) {
    return res.status(500).send({
      message: "Unable to validate User role!",
    });
  }
};


module.exports = authenticateToken;
