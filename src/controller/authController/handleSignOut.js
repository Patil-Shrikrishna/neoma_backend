const handleSignOut = async (req, res) => {
  try {
    res
      .clearCookie("token", { httpOnly: true, expires: new Date(0) })
      .status(200)
      .send("Logged Out");
  } catch (error) {
    console.log(error);
  }
};
module.exports = handleSignOut;
