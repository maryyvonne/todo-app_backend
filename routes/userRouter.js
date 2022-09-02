import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserTasks,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter
  // Create
  .post("/", createUser)
  // Read
  .get("/", getUsers)
  // Update
  .put("/:id", updateUser)
  //Delete
  .delete("/:id", deleteUser)
  // Get User Tasks
  .get("/task/:id", getUserTasks);

export default userRouter;
