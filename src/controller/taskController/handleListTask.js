const Task = require("../../model/task.model");

const handleListTask = async (req, res) => {
  const userId = req.user.id;
  const email = req.user.email;
  console.log(email);

  try {
    const taskList = await Task.find({ user: userId });
    if (!taskList) {
      res.status(404).json({
        success: false,
        message: "No Task Found",
      });
    }
    res.status(200).json({
      success: true,
      data: taskList,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
module.exports = handleListTask;
