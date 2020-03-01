const express = require('express');
const categoryRouter = express.Router();
const categoryDao = require('../dao').dao.category;
const ObjectId = require('mongodb').ObjectId
const flat = require('flat');

categoryRouter.get('/list', async (req, res) => {
    let result = await categoryDao.getCategoryList(req.query && req.query.owner_id);
    if (req.query.flat) {
        result = result.map(entry => {
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
categoryRouter
    .post('', async (req, res) => {
        console.log('rweq: ', req.body);
        
        if (req.body && req.body.name && req.body.status) {
            const category = {
                name: req.body.name,
                category_id: req.body.category_id,
                status: req.body.status,
                owner_id: req.body.owner_id,
                created_date: new Date().valueOf(),
                updated_date: new Date().valueOf()
            }
            let result = await categoryDao.addCategory(category);
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
        if (req.body && req.body.name && req.body.status) {
            const category = {
                name: req.body.name,
                category_id: req.body.category_id,
                status: req.body.status,
                owner_id: req.body.owner_id,
                updated_date: new Date().valueOf()

            }
            let result = await categoryDao.updateCategory(category);
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
            let result = await categoryDao.getCategory(req.params['id']);

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
            let result = await categoryDao.deleteCategory(req.params['id']);
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
module.exports = categoryRouter