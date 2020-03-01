const express = require('express');
const userRouter = express.Router();
const userDao = require('../dao').dao.user;
const ObjectId = require('mongodb').ObjectId
const flat = require('flat');

userRouter.get('/list', async (req, res) => {
    let result = await userDao.getUserList();
    if (req.query.flat) {
        result = result.map(entry => {
            entry.id = new ObjectId(entry._id).toHexString().toString();
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
userRouter
    .post('', async (req, res) => {
        if (req.body && req.body.email ) {
            const user = {
                email: req.body.email,
                password: req.body.password || '',
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                mobile: req.body.mobile,
                address: req.body.address || '',
                role: 'User',
                status: req.body.status,
                city: req.body.city
            }
            let result = await userDao.createUser(user);
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
        if (req.body && req.body.email && req.body._id) {
            const user = {
                email: req.body.email,
                name: req.body.name,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                mobile: req.body.mobile,
                address: req.body.address,
                status: req.body.status,
                city: req.body.city,
                role: 'User'
            }
            let result = await userDao.updateUser(user);
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
            let result = await userDao.getUser(req.params['id']);
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
            let result = await userDao.deleteUser(req.params['id']);
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
module.exports = userRouter