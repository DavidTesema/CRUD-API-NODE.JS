const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/",getAll);
router.get("/:id",getById);
router.post("/",createProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

module.exports = router
