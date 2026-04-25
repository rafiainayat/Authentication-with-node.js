import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import authroute from "./routes/AuthRoutes.js";

const app = express();

dotenv.config();

connectDb();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "successfully running",
  });
});

app.use("/api/v1/auth", authroute);

app.listen(process.env.PORT, () => {
  console.log("server is running", process.env.PORT);
});