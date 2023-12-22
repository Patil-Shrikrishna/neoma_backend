const Task = require("../../model/task.model");

const handleDeleteTask = async (req, res) => {
  const { _id } = req.body;
  try {
    const deletedTask = await Task.deleteOne({ _id });
    if (!deletedTask) {
      res.status(500).json({
        success: false,
        error: "Task not found",
      });
    }
    res.status(200).json({
      success: true,
      data: deletedTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
module.exports = handleDeleteTask;
