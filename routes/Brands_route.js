const express = require('express');
const router = express.Router();
const Brands_Controller = require('../controllers/Brands_controller');




router.post('/', Brands_Controller.createBrand);
router.get('/', Brands_Controller.getBrands);
router.get('/:id', Brands_Controller.getBrandById)
router.put('/:id', Brands_Controller.updateBrand);
router.delete('/:id', Brands_Controller.deleteBrand);




module.exports = router;
