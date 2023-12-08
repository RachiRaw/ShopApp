import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";
import { protectRoutes, admin } from "../middleware/authmiddleware.js";

router.route("/").get(getProducts).post(protectRoutes, admin, createProduct);
router
  .route("/:id")
  .get(getProductById)
  .put(protectRoutes, admin, updateProduct);

export default router;
