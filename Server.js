import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";


import indexRouter from "./routes/indexRouter.js";
import authRouter from "./routes/auth.js";
import projectRouter from "./routes/projectRouter.js";
import taskRouter from "./routes/taskRouter.js";
import userRouter from './routes/userRouter.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("directory-name 👉️", __dirname);


const app = express();
dotenv.config();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongodb..."))
  .catch((err) => console.error(err));

app.set("views", path.join(__dirname, "views"));
  
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/projects", projectRouter);
app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
  console.log("Connected to backend.");
});
