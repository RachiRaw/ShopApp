import express from "express";
import products from "./data/products.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is up at port ${PORT}`));
