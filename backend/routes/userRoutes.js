import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { protectRoutes, admin } from "../middleware/authmiddleware.js";

router.route("/").get(protectRoutes, admin, getUsers).post(registerUser);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protectRoutes, getUserProfile)
  .put(protectRoutes, updateUserProfile);
router
  .route("/:id")
  .get(protectRoutes, admin, getUserById)
  .delete(protectRoutes, admin, deleteUser)
  .put(protectRoutes, admin, updateUser);

export default router;
