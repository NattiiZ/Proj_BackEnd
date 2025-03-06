const express = require('express');
const router = express.Router();
const Orders_Controller = require('../controllers/Orders_controller');




router.post('/', Orders_Controller.createOrder);
router.get('/', Orders_Controller.getOrders);
router.get('/:id', Orders_Controller.getOrderById);
router.put('/:id', Orders_Controller.updateOrder);
router.delete('/:id', Orders_Controller.deleteOrder);




module.exports = router;