const express = require("express");
const router = express.Router();
const authController = require("../controller/authController/authController");

router.post("/register", authController.handleRegister);
router.post("/signin", authController.handleSignIn);
router.post("/signout", authController.handleSignOut);

module.exports = router;
