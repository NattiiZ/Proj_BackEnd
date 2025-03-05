const express = require('express');
const router = express.Router();
const CartItems_Controller = require('../controllers/CartItems_controller');


router.post('/', CartItems_Controller.addCartItem);
router.get('/', CartItems_Controller.getCartItems);
router.put('/:id', CartItems_Controller.updateCartItem);
router.delete('/:id', CartItems_Controller.deleteCartItem);


module.exports = router;