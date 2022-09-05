import express from "express";
import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  getProjectTasks,
  getByUser,
  getProject,
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

  //Get Project
  .get('/find/:id', getProject)
 
  // Get Project Tasks
  .get("/task/:id", getProjectTasks)
  .get("/user", getByUser);

export default projectRouter;
