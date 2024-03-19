const express = require("express");
const productRouter = require("./routes/productRouter");
require("dotenv").config();
const app = express();
require("./config/database");

app.use(express.json());

app.use("/api/products", productRouter);

app.listen(8000, () => {
  console.log("listen to port 8000");
});
