const Orders = require('../models/Order');

async function indexO(req, res) {
    try {
        const orders = await Orders.getAllOrders();
        console.log('controller' + orders)
        res.status(200).json(orders)
    } catch(err) {
        res.status(500).json({error:err.message})
    }
}

async function createO(req, res) {
    try {
        const data = req.body;
        console.log(data);
        const newOrder = await Orders.createOrder(data)
        res.status(201).json(newOrder)
    } catch(err) {
        res.status(400).json({error:err.message})
    }
}

module.exports={ indexO, createO }

