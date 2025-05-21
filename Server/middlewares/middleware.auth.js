const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const authenticate = (req, res, next) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const secretKey = process.env.JWT_SECRET || 'secret-key';
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    req.user.role = decoded.role; 
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

const authorize = (roles) => (req, res, next) => {
  console.log("req.user", req.user);
  if (!req.user || !roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
  }
  next();
};

module.exports = { authenticate, authorize };