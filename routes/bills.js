const express = require('express');
const router = express.Router();
var billController = require('../controllers/billController');

router.get('/getBills/:patientId',billController.getBills);

router.post('/saveBill',billController.saveBills);

router.post('/updateBill',billController.updateBills);


module.exports = router;