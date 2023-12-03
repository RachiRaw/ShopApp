import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
} from "../controllers/orderController.js";
import { protectRoutes, admin } from "../middleware/authmiddleware.js";

router
  .route("/")
  .get(protectRoutes, admin, getAllOrders)
  .post(protectRoutes, addOrderItems);
router.route("/mine").get(protectRoutes, getMyOrders);
router.route("/:id").get(protectRoutes, getOrderById);
router.route("/:id/pay").put(protectRoutes, updateOrderToPaid);
router.route("/:id/deliver").put(protectRoutes, admin, updateOrderToDelivered);

export default router;
