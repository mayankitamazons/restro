const express = require('express');
const staffRouter = express.Router();
const staffDao = require('../dao').dao.staff;
const ObjectId = require('mongodb').ObjectId
const flat = require('flat');


staffRouter.get('/list', async (req, res) => {
    console.log('req: ', req.query);

    if (req.query && req.query.owner_id ) {

    let result = await staffDao.getStaffList(req.query.owner_id);
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
} else {
    res.status(400);
    res.send(
        { error: "Inavlid parameters" }
    );
}
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
                role: 'Manager',
                status: req.body.status,
                city: req.body.city,
                owner_id: req.body.owner_id,
                permission: req.body.permission,
                area: req.body.area

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
        if (req.body && req.body.email && req.body._id) {
            const user = {
                email: req.body.email,
                name: req.body.name,
                mobile: req.body.mobile,
                address: req.body.address,
                status: req.body.status,
                city: req.body.city,
                owner_id: req.body.owner_id,
                permission: req.body.permission,
                area: req.body.area

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