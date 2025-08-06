import express from "express";
import "dotenv/config";
import userRouter from "./routes/userRoutes.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/api/user/", userRouter);
// connect database
connectDB();

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log("Server running on PORT:", PORT);
  }
});
