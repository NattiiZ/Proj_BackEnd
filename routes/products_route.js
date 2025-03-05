const express = require('express');
const router = express.Router();
const Products_Controller = require('../controllers/Products_controller');


router.post('/', Products_Controller.createProduct);
router.get('/', Products_Controller.getProducts);
router.get('/:id', Products_Controller.getProductById);
router.put('/:id', Products_Controller.updateProduct);
router.delete('/:id', Products_Controller.deleteProduct);


module.exports = router;