import express from "express";
import "dotenv/config";
import userRouter from "./routes/userRoutes.js";
import todoRouter from "./routes/todoRoutes.js";
import { connectDB } from "./config/db.js";
import cors from 'cors'

const PORT = process.env.PORT;

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
   
  })
);
app.use(express.json());

app.use("/api/user/", userRouter);
app.use("/api/user/todo", todoRouter);
// connect database
connectDB();

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log("Server running on PORT:", PORT);
  }
});
