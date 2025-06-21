import express from "express";
import {
  signup,
  login,
  updateUser,
  deleteUser,
  getAllUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/", getAllUsers);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
