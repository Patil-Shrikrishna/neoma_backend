const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController/taskController");
const verifyUser = require("../middleware/verifyUserMiddleware");

router.post("/create", verifyUser, taskController.handleCreateTask);
router.get("/list", verifyUser, taskController.handleListTask);
router.put("/update", verifyUser, taskController.handleUpdateTask);
router.delete("/delete", verifyUser, taskController.handleDeleteTask);

module.exports = router;
