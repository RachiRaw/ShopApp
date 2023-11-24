import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@route      GET /api/products
//@desc       Fetch Products data
//@access     Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@route      GET /api/products/id
//@desc       Fetch a particular product data by id
//@access     Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  }
  res.status(404);
  throw new Error("Resource not found");
});

export { getProducts, getProductById };
