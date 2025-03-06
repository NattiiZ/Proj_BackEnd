const express = require('express');
const router = express.Router();
const OrderDetails_Controller = require('../controllers/OrderDetails_controller');




router.post('/', OrderDetails_Controller.createOrderDetail);
router.get('/', OrderDetails_Controller.getOrderDetails);
router.get('/:id', OrderDetails_Controller.getOrderDetailById);
router.put('/:id', OrderDetails_Controller.updateOrderDetail);
router.delete('/:id', OrderDetails_Controller.deleteOrderDetail);




module.exports = router;