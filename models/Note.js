import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  status: { type: String, required: true },
  project: [{ type: Schema.ObjectId, ref: "Project" }],
  notes: [{ type: Schema.ObjectId, ref: "Note" }],
  todos: [{ type: Schema.ObjectId, ref: "Todos" }],
  createdDate: { type: Date, required: true },
});

const Note = mongoose.model("Note", NoteSchema);
export default Note;
