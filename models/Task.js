import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  archive: { type: Boolean, required: false },
  status: { type: String, required: true },
  project: [{ type: Schema.ObjectId, ref: "Project" }],
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

const Task = mongoose.model("Task", TaskSchema);
export default Task;
