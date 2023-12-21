const handleSignOut = async (req, res) => {
  try {
    console.log("Cookie data before clearing:", req.cookies.token);

    res
      .clearCookie("token", { httpOnly: true, expires: new Date(0) })
      .status(200)
      .send("Logged Out");
  } catch (error) {
    console.log(error);
  }
};
module.exports = handleSignOut;
