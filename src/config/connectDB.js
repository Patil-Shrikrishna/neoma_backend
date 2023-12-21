const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected To MongoDB");
  } catch (err) {
    console.log(err);
    console.log("Retrying...");
    connectDB();
  }
};
module.exports = connectDB;
