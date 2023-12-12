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
import checkObjectId from "../middleware/checkObjectId.js";

router.route("/").get(getProducts).post(protectRoutes, admin, createProduct);
router.post("/:id/reviews", protectRoutes, checkObjectId, createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(checkObjectId, getProductById)
  .put(protectRoutes, admin, checkObjectId, updateProduct)
  .delete(protectRoutes, admin, checkObjectId, deleteProduct);

export default router;
