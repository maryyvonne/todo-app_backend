import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  userId: [{ type: Schema.ObjectId, ref: "User", required: true }],
  description: { type: String, required: false },
  archived: { type: Boolean, required: false },
  status: { type: String, required: false },
  project: [{ type: Schema.ObjectId, ref: "Project", default: "INBOX" }],
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

const Task = mongoose.model("Task", TaskSchema);
export default Task;
