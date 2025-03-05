const express = require('express');
const router = express.Router();
const Status_Controller = require('../controllers/Status_controller');


router.post('/', Status_Controller.createStatus);
router.get('/', Status_Controller.getStatuses);
router.put('/:id', Status_Controller.updateStatus);
router.delete('/:id', Status_Controller.deleteStatus);


module.exports = router;