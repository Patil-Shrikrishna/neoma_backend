require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/connectDB");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;

connectDB();
const app = express();
//Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes
app.use("/auth", require("./routes/auth"));

//Starting Server
app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});
