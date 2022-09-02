import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, ref: "Project Types" },
  description: { type: String, required: false },
  status: {
    type: String,
    required: true,
    enum: ["Not Started", "In Progress", "On Hold", "Completed"],
    default: "Not Started",
  },
  tasks: [{ type: Schema.ObjectId, ref: "Task" }],
  notes: [{ type: Schema.ObjectId, ref: "Note" }],
  todos: [{ type: Schema.ObjectId, ref: "Todo" }],
  antStartDate: { type: Date, required: true },
  actualStartDate: { type: Date, required: true },
  antEndDate: { type: Date, required: true },
  actualEndDate: { type: Date, required: true },
  estTotalCost: { type: Number, required: true },
  actualTotalCost: { type: Number, required: true },
  estMaterialCost: { type: Number, required: true },
  actualMaterialCost: { type: Number, required: true },
  estLaborCost: { type: Number, required: true },
  actualLaborCost: { type: Number, required: true },
  budget: { type: Number, required: true },
});

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
