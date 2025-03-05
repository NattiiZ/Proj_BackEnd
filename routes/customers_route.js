const express = require('express');
const router = express.Router();
const Customers_Controller = require('../controllers/Customers_controller');

router.post('/', Customers_Controller.createCustomer);
router.get('/', Customers_Controller.getCustomers);
router.get('/:id', Customers_Controller.getCustomerbyId);
router.put('/:id', Customers_Controller.updateCustomer);
router.delete('/:id', Customers_Controller.deleteCustomer);

module.exports = router;