const express = require('express');

const router = express.Router();

const itemController = require('../controllers/itemsController')

router
    .route('/')
    .get(itemController.getAllItems)
    .post(itemController.createItem)


router
    .route('/:id')
    .get(itemController.getItem)
    .delete(itemController.deleteItem)

module.exports = router;