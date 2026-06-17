//access router functionality from express
const { Router } = require('express')

//add the controller
const orderController = require('../controllers/orders')

//initiate router
const orderRouter = Router()

//define endpints
orderRouter.get('/', orderController.indexO);
orderRouter.post('/', orderController.createO);


module.exports=orderRouter
