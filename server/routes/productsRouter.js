const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);

router.post('/', productController.insertNewProduct);

router.get('/:id', productController.getProductById);

router.put('/:id', productController.updateProductById);

router.delete('/:id', productController.deleteProductById);

module.exports = router;
