import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Active", "Inactive", "Admin"],
      default: "Active",
    },
    tasks: [{ type: Schema.ObjectId, ref: "Task" }],
    notes: [{ type: Schema.ObjectId, ref: "Note" }],
    todos: [{ type: Schema.ObjectId, ref: "Todo" }],
    projects: [{ type: Schema.ObjectId, ref: "Project" }],
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
