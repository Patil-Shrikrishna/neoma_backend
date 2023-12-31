const User = require("../../model/user.model");
const bcrypt = require("bcryptjs");

const handleRegister = async (req, res) => {
  try {
    // Get all data from body
    const { firstName, lastName, email, password } = req.body;

    // Check if all the data exist
    if (!(firstName && lastName && email && password)) {
      res.status(400).send("All the fields are compulsary");
    }

    // Check if user already exist - email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).send("User already exist");
    }

    //encrypt the password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Save the user in DB
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
    });

    user.password = undefined;

    res.status(201).json(user);
  } catch (error) {
    console.log("error.message", error.message);
  }
};
module.exports = handleRegister;
