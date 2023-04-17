const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

router
    .route('/login')
    .post(userController.login)


router
    .route('/signup')
    .post(userController.createUser)




router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.addToCart)


module.exports = router;