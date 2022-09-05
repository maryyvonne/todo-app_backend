import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: false },
  projectId: { type: String, required: false },
  userId: [{ type: Schema.ObjectId, ref: "User" }],
  type: { type: Schema.ObjectId, ref: "Project Types" },
  description: { type: String, required: false },
  status: {
    type: String,
    required: false,
    enum: ["Not Started", "In Progress", "On Hold", "Completed"],
    default: "Not Started",
  },
  tasks: [{ type: Schema.ObjectId, ref: "Task" }],
  notes: [{ type: Schema.ObjectId, ref: "Note" }],
  todos: [{ type: Schema.ObjectId, ref: "Todo" }],
  antStartDate: { type: Date, required: false },
  actualStartDate: { type: Date, required: false },
  antEndDate: { type: Date, required: false },
  actualEndDate: { type: Date, required: false },
  estTotalCost: { type: Number, required: false },
  actualTotalCost: { type: Number, required: false },
  estMaterialCost: { type: Number, required: false },
  actualMaterialCost: { type: Number, required: false },
  estLaborCost: { type: Number, required: false },
  actualLaborCost: { type: Number, required: false },
  budget: { type: Number, required: false },
});

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
