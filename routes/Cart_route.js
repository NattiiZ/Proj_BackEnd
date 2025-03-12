const express = require('express');
const router = express.Router();
const Cart_Controller = require('../controllers/Cart_controller');




router.post('/', Cart_Controller.createCart);
router.get('/', Cart_Controller.getCarts);
router.get('/:id', Cart_Controller.getCartById)
router.put('/:id', Cart_Controller.updateCart);
router.delete('/:id', Cart_Controller.deleteCart);




module.exports = router;
