const express = require('express');
const areaRouter = express.Router();
const areaDao = require('../dao').dao.area;
const ObjectId = require('mongodb').ObjectId
const flat = require('flat');

areaRouter.get('/list', async (req, res) => {
    let result = await areaDao.getAreaList();
    if (req.query.flat) {
        result = result.map(entry => {
            entry.id = new ObjectId(entry._id).toHexString().toString();
            delete entry._id;
            return flat.flatten(entry);
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
areaRouter
    .post('', async (req, res) => {
        console.log('rweq: ', req.body);
        
        if (req.body && req.body.area && req.body.status) {
            const area = {
                area: req.body.area,
                status: req.body.status
            }
            let result = await areaDao.addArea(area);
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
        if (req.body && req.body.area && req.body._id && req.body.status) {
            const area = {
                area: req.body.area,
                status: req.body.status
            }
            let result = await areaDao.updateArea(area);
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
            let result = await areaDao.getArea(req.params['id']);

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
            let result = await areaDao.deleteArea(req.params['id']);
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
module.exports = areaRouter