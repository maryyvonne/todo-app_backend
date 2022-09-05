import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/task.js";
const TaskRouter = express.Router();

TaskRouter
  // Create
  .post("/add", createTask)
  // Read
  .get("/", getTasks)
  // Update
  .put("/:id", updateTask)
  //Delete
  .delete("/:id", deleteTask);
// Get Task Tasks

export default TaskRouter;
