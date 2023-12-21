const mongoose = require("mongoose");
const User = require("../../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const handleSignIn = async (req, res) => {
  try {
    // Get all data from body
    const { email, password } = req.body;

    // Validation check
    if (!(email && password)) {
      res.status(400).send("All fields are require");
    }

    // Find user in DB
    const user = await User.findOne({ email });

    // If user doesn't exist
    if (!user) {
      res.status(404).send("User not found");
    }
    // Match the password
    if (user && (await bcrypt.compare(password, user.password))) {
      // Generate a token for user and send it
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      user.token = token;
      user.password = undefined;

      // Send token in user cookie
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = handleSignIn;
