const express = require('express');
const router = express.Router();


const purchaseController = require('../controllers/purchaseController');

router
    .route('/')
    .post(purchaseController.makingPurchase)
router
    .route('/:id')
    .get(purchaseController.getAllPurchase)

module.exports = router;