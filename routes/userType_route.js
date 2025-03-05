const express = require('express');
const router = express.Router();
const UserType_Controller = require('../controllers/UserType_controller');


router.post('/', UserType_Controller.createUserType);
router.get('/', UserType_Controller.getUserTypes);
router.put('/:id', UserType_Controller.updateUserType);
router.delete('/:id', UserType_Controller.deleteUserType);


module.exports = router;