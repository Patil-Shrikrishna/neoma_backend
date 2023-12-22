const Task = require("../../model/task.model");

const expand = (val) => (val ? { val } : {});
const handleUpdateTask = async (req, res) => {
  const { _id, title, description, status } = req.body;

  try {
    const updatedTask = await Task.updateOne(
      { _id },
      { ...expand(title), ...expand(description), ...expand(status) }
    );
    if (!updatedTask) {
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
    res.status(200).json({
      success: true,
      data: updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
module.exports = handleUpdateTask;
