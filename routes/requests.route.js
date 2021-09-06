const { Router } = require('express');
const { requestsController } = require('../controllers/requests.controller')


const router = Router();

router.post('/requests/:medicationId', requestsController.addRequest);
router.get('/requests/:medicationId', requestsController.getRequestByMedication);

module.exports = router;

