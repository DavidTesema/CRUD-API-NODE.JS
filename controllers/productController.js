const Product = require("../models/product");
// GET
const getAll = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// GEt BY ID
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// POST
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// UPDATE
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await Product.findByIdAndUpdate(id, body);
    res.status(200).json({ massage: "product is updated !" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// DELETE
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json({ massage: "product is deleted !" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
};
