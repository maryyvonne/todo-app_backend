import Task from "../models/Task.js";
import Project from "../models/Project.js";
import { createError } from "../utils/error.js";

export const createTask = async (req, res, next) => {
  const projectId = req.params.projectId;
  const newTask = new Task(req.body);

  try {
    const savedTask = await newTask.save();
    try {
      await Project.findByIdAndUpdate(projectId, {
        $push: { tasks: savedTask._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedTask);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (err) {
    next(err);
  }
};
export const updateTaskAvailability = async (req, res, next) => {
  try {
    await Task.updateOne(
      { "taskNumbers._id": req.params.id },
      {
        $push: {
          "taskNumbers.$.unavailableDates": req.body.dates,
        },
      }
    );
    res.status(200).json("Task status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteTask = async (req, res, next) => {
  const projectId = req.params.projectId;
  try {
    await Task.findByIdAndDelete(req.params.id);
    try {
      await Project.findByIdAndUpdate(projectId, {
        $pull: { tasks: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Task has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};
export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
};
