const express = require('express');
const router = express.Router();
const Users_Controller = require('../controllers/Users_controller');




router.post('/', Users_Controller.createUser);
router.get('/', Users_Controller.getUsers);
router.get('/:id', Users_Controller.getUserById);
router.put('/:id', Users_Controller.updateUser);
router.delete('/:id', Users_Controller.deleteUser);




module.exports = router;
