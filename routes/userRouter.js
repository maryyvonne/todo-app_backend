import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserTasks,
  getUser,
  getUserProjects,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter
  // Create
  .post("/", createUser)
  // Read
  .get("/", getUsers)
  .get("/id", getUser)
  // Update
  .put("/:id", updateUser)
  //Delete
  .delete("/:id", deleteUser)
  // Get User Tasks
  .get("/:id/tasks", getUserTasks)
  .get("/:id/projects", getUserProjects);

export default userRouter;
