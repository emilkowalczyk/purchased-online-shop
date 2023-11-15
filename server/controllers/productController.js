const Product = require('../models/productModel');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    return err;
  }
};

const getProductById = async (req, res) => {
  const productID = req.params.id;

  const product = await Product.findById(productID);
  res.json(product);
};

const updateProductById = async (req, res) => {
  const productID = req.params.id;
  try {
    const { name, category, price, description, image, averageRating } =
      req.body;

    const product = await Product.findByIdAndUpdate(productID, {
      name,
      category,
      price,
      description,
      image,
      averageRating,
    });

    res.json(product);
  } catch (err) {
    return err;
  }
};

const deleteProductById = async (req, res) => {
  const productID = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(productID);
    res.json(product);
  } catch (err) {
    return err;
  }
};

const insertNewProduct = async (req, res) => {
  const { name, category, price, description, image, averageRating } = req.body;
  try {
    const product = await Product.create({
      name,
      category,
      price,
      description,
      image,
      averageRating,
    });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  insertNewProduct,
};
