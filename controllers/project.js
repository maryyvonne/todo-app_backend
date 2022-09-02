import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const createProject = async (req, res, next) => {
  const newProject = new Project(req.body);

  try {
    const savedProject = await newProject.save();
    res.status(200).json(savedProject);
  } catch (err) {
    next(err);
  }
};
export const updateProject = async (req, res, next) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    next(err);
  }
};
export const deleteProject = async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json("Project has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
};
export const getProjects = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const projects = await Project.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Project.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const projectCount = await Project.countDocuments({ type: "project" });
    const apartmentCount = await Project.countDocuments({ type: "apartment" });
    const resortCount = await Project.countDocuments({ type: "resort" });
    const villaCount = await Project.countDocuments({ type: "villa" });
    const cabinCount = await Project.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "project", count: projectCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getProjectTasks = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    const list = await Promise.all(
      project.tasks.map((task) => {
        return Task.findById(task);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const getProjectNotes = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    const list = await Promise.all(
      project.notes.map((note) => {
        return Note.findById(note);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
