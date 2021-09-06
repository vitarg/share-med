const { Router } = require('express');
const { requestsController } = require('../controllers/requests.controller')


const router = Router();

router.post('/request/medication/:id', requestsController.addRequest);
router.get('/getRequest/medication/:id', requestsController.getRequestMedication);

module.exports = router;

