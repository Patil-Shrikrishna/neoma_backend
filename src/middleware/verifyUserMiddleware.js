require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: "Invalid token." });
  }
};
module.exports = verifyUser;
