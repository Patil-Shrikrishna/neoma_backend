const express = require("express");
const router = express.Router();
const authController = require("../controller/authController/authController");

router.post("/register", authController.handleRegister);

module.exports = router;
