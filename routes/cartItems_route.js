const express = require('express');
const router = express.Router();
const CartItems_Controller = require('../controllers/CartItems_controller');




router.post('/', CartItems_Controller.addCartItem);
router.get('/', CartItems_Controller.getCartItems);
router.get('/:id', CartItems_Controller.getCartItemById);
// router.put('/:id', CartItems_Controller.updateCartItem);
router.put('/', CartItems_Controller.updateCartItem);
router.delete('/:id/:item', CartItems_Controller.deleteItem);




module.exports = router;