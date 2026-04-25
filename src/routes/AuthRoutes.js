import express from "express";
import {
  addUser,
  loginUser,
  allUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/AuthControllers.js";

const authroute = express.Router();

authroute.post("/register", addUser);
authroute.post("/login", loginUser);

authroute.get("/getuser", allUsers);
authroute.get("/user/:id", getUser);

authroute.put("/user/:id", updateUser);
authroute.delete("/user/:id", deleteUser);

export default authroute;