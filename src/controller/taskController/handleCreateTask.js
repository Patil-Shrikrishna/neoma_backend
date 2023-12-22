const Task = require("../../model/task.model");

const handleCreateTask = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;
  try {
    const newTask = await Task.create({
      title,
      description,
      user: userId,
    });
    res.status(201).json({
      success: true,
      data: newTask,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      error: error.message,
    });
  }
};
module.exports = handleCreateTask;
