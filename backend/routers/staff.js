const express = require('express');
const staffRouter = express.Router();
const staffDao = require('../dao').dao.staff;
const ObjectId = require('mongodb').ObjectId
const flat = require('flat');

staffRouter.get('/list', async (req, res) => {
    console.log('req: ', req.query);

    let result = [];
    if (req.query && req.query.owner_id) {
        result = await staffDao.getStaffListForVendor(req.query.owner_id);

    } else {
        result = await staffDao.getStaffList();

    }
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

staffRouter
    .post('', async (req, res) => {
        if (req.body && req.body.email && req.body.password) {
            const user = {
                email: req.body.email,
                password: req.body.password,
                name: req.body.name || '',
                mobile: req.body.mobile,
                address: req.body.address || '',
                role:  req.body.role,
                status: req.body.status,
                city: req.body.city,
                owner_id: req.body.owner_id,
                created_date: new Date().valueOf(),
                updated_date: new Date().valueOf()

            };
            console.log('user: ', user);
            let result = await staffDao.createStaff(user);
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
        if (req.body && req.body.email && req.body.staff_id) {
            const user = {
                staff_id:  req.body.staff_id,
                email: req.body.email,
                name: req.body.name,
                mobile: req.body.mobile,
                address: req.body.address,
                status: req.body.status,
                city: req.body.city,
                role:  req.body.role,
                owner_id: req.body.owner_id,
                password: req.body.password,
                updated_date: new Date().valueOf()
            }
            let result = await staffDao.updateStaff(user);
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
            let result = await staffDao.getStaff(req.params['id']);
            if (req.query.flat) {
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
            console.log('eq: ', req.params);
            let result = await staffDao.deleteStaff(req.params['id']);
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
module.exports = staffRouter