import express from "express";
import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  getProjectTasks,
} from "../controllers/project.js";

const projectRouter = express.Router();

projectRouter
  // Create
  .post("/", createProject)
  // Read
  .get("/", getProjects)
  // Update
  .put("/:id", updateProject)
  //Delete
  .delete("/:id", deleteProject)
  // Get Project Tasks
  .get("/task/:id", getProjectTasks);

export default projectRouter;
