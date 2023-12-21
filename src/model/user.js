const mongoose = require("mongoose");

const userModelSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, "Name should be at least 2 characters."],
    maxlength: [50, "Name should not exceed 50 characters."],
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, "Name should be at least 2 characters."],
    maxlength: [50, "Name should not exceed 50 characters."],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
      },
      message: "Invalid E-Mail ID!",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password should be at least 8 characters."],
  },

  // We can also set a field for confirm password, but that can be taken care using different user defined functions or in front-end also.

  token: {
    type: String,
    default: null,
  },
});

const user = mongoose.model("user", userModelSchema);
module.exports = user;
