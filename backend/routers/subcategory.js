const express = require('express');
const subcategoryRouter = express.Router();
const subcategoryDao = require('../dao').dao.subcategory;
const ObjectId = require('mongodb').ObjectId
const flat = require('flat');

subcategoryRouter.get('/list', async (req, res) => {
    let result = [];
    
    if (req.query && req.query.category_id) {
        result = await subcategoryDao.getSubcategoryListForCategory(req.query.owner_id, req.query.category_id);

    } else {
        result = await subcategoryDao.getSubcategoryList(req.query && req.query.owner_id);
    }

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
subcategoryRouter
    .post('', async (req, res) => {
        console.log('rweq: ', req.body);
        
        if (req.body && req.body.name && req.body.status) {
            const subcategory = {
                name: req.body.name,
                status: req.body.status,
                category: req.body.category,
                owner_id: req.body.owner_id
            }
            let result = await subcategoryDao.addSubcategory(subcategory);
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
            const subcategory = {
                name: req.body.name,
                subcategory_id: req.body.subcategory_id,
                status: req.body.status,
                category: req.body.category,
                owner_id: req.body.owner_id
            }
            let result = await subcategoryDao.updateSubcategory(subcategory);
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
            let result = await subcategoryDao.getSubcategory(req.params['id']);

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
            console.log('takatak req: ', req.params);
            let result = await subcategoryDao.deleteSubcategory(req.params['id']);
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
module.exports = subcategoryRouter