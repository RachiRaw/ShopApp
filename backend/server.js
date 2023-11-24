import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import products from "./data/products.js";
dotenv.config();

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is up at port ${PORT}`));