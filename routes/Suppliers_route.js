const express = require('express');
const router = express.Router();
const Suppliers_Controller = require('../controllers/Suppliers_controller');


router.post('/', Suppliers_Controller.createSupplier);
router.get('/', Suppliers_Controller.getSuppliers);
router.get('/:id', Suppliers_Controller.getSuppliersbyId);
router.put('/:id', Suppliers_Controller.updateSupplier);
router.delete('/:id', Suppliers_Controller.deleteSupplier);


module.exports = router;