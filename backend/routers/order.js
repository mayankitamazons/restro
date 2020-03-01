const express = require('express');
const orderRouter = express.Router();
const orderDao = require('../dao').dao.order;
const flat = require('flat');
const ObjectId = require('mongodb').ObjectId

orderRouter.get('/list', async (req, res) => {
    console.log('req: ', req.query, req.params);
    let result = []
    // if (req.query && req.query.cuisine) {
    //     result = await orderDao.getOrderListByCategory(req.query.owner_id, req.query.cuisine);
    // } else {
        result = await orderDao.getOrderList(req.query.owner_id);
    // }
    if (req.query.flat) {
        result = result.map(entry => {
            delete entry._id;
            return flat.flatten(entry)
        }
        );
    }
    if (result['statusCode']) {
        res.status(result['statusCode']);
    }
    res.send(
        result
    );
});

orderRouter.get('/top', async (req, res) => {
    let result = await orderDao.getOrderList();
    if (result['statusCode']) {

        res.status(result['statusCode']);
    }
    res.send(
        result
    );
});

// orderRouter.get('/list', async (req, res) => {
//     console.log('req: ', req.query, req.params);

//     let result = await order.getOrderList();
//     if (result['statusCode']) {

//         res.status(result['statusCode']);
//     }
//     res.send(
//         result
//     );
// });
orderRouter
    .post('', async (req, res) => {
        if (req.body && req.body.user_id && req.body.owner_id && req.body.product) {
            const order = {
                user_name: req.body.user_name,
                user_id: req.body.user_id,
                status: req.body.status,
                price: req.body.price,
                owner_id: req.body.owner_id,
                quantity: req.body.quantity,
                product: req.body.product,
                customization: req.body.customization,
                created_date: new Date().valueOf(),
                updated_date: new Date().valueOf()
            };

            let result = await orderDao.createOrder(order);
            if (result['statusCode']) {

                res.status(result['statusCode']);
            }
            res.send(
                result
            );
        } else {
            res.status(400);
            res.send(
                { error: "Inavlid parameters" }
            );
        }
    })
    .put('', async (req, res) => {
        if (req.body && req.body.name && req.body.order_id) {
            const order = {
                order_id: req.body.order_id,
                user_name: req.body.user_name,
                user_id: req.body.user_id,
                status: req.body.status,
                price: req.body.price,
                owner_id: req.body.owner_id,
                product: req.body.product,
                quantity: req.body.quantity,
                customization: req.body.customization,
                updated_date: new Date().valueOf()
            }
            let result = await orderDao.updateOrder(order);
            if (result['statusCode']) {

                res.status(result['statusCode']);
            }
            res.send(
                result
            );
        } else {
            res.status(400);
            res.send(
                { error: "Inavlid parameters" }
            );
        }
    })
    .get('/:id', async (req, res) => {
        if (req.params && req.params['id']) {
            console.log('takatak req: ', req.params);
            let result = await orderDao.getOrder(req.params['id']);
            
            if (req.query.flat) {
                result.id = new ObjectId(result._id).toHexString().toString();
                delete result._id;
                result = flat.flatten(result);  
            }

            if (result['statusCode']) {
                res.status(result['statusCode']);
            }

            res.send(
                result
            );
        } else {
            res.status(400);
            res.send(
                { error: "Inavlid parameters" }
            );
        }
    })
    .delete('/:id', async (req, res) => {
        if (req.params && req.params['id']) {
            console.log('takatak req: ', req.params);
            let result = await orderDao.deleteOrder(req.params['id']);
            if (result['statusCode']) {
                res.status(result['statusCode']);
            }
            res.send(
                result
            );
        } else {
            res.status(400);
            res.send(
                { error: "Inavlid parameters" }
            );
        }
    })
module.exports = orderRouter