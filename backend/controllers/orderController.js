import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//@route      POST /api/orders
//@desc       Create new order
//@access     Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No orders items");
  } else {
    const order = new Order({
      orderItems: orderItems.map((item) => ({
        ...item,
        product: item._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

//@route      GET /api/orders/myorders
//@desc       Get logged in user orders
//@access     Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

//@route      GET /api/orders/:id
//@desc       Get order by ID
//@access     Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

//@route      GET /api/orders/:id/pay
//@desc       Update Order to paid
//@access     Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("Update Order to paid");
});

//@route      GET /api/orders/:id/deliver
//@desc       Update to delivered
//@access     Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("Delivered");
});

//@route      GET /api/orders
//@desc       Get all orders
//@access     Private/Admin
const getAllOrders = asyncHandler(async (req, res) => {
  res.send("Get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
};
