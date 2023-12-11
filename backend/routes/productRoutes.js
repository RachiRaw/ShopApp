import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protectRoutes, admin } from "../middleware/authmiddleware.js";

router.route("/").get(getProducts).post(protectRoutes, admin, createProduct);
router.post("/:id/reviews", protectRoutes, createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .put(protectRoutes, admin, updateProduct)
  .delete(protectRoutes, admin, deleteProduct);

export default router;
