const express = require('express');
const router = express.Router();
const Category_Controller = require('../controllers/Category_controller');




router.post('/', Category_Controller.createCategory);
router.get('/', Category_Controller.getCategories);
router.get('/:id', Category_Controller.getCategoryById);
router.put('/:id', Category_Controller.updateCategory);
router.delete('/:id', Category_Controller.deleteCategory);




module.exports = router;