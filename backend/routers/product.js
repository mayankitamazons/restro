const express = require('express');
const productRouter = express.Router();
const productDao = require('../dao').dao.product;
const flat = require('flat');
const ObjectId = require('mongodb').ObjectId

productRouter.get('/list', async (req, res) => {
    console.log('req: ', req.query, req.params);
    let result = []
    if (req.query && req.query.cuisine) {
        result = await productDao.getProductListByCategory(req.query.owner_id, req.query.cuisine);
    } else {
        result = await productDao.getProductList(req.query.owner_id);
    }
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

productRouter.get('/top', async (req, res) => {
    let result = await productDao.getProductList();
    if (result['statusCode']) {

        res.status(result['statusCode']);
    }
    res.send(
        result
    );
});

// productRouter.get('/list', async (req, res) => {
//     console.log('req: ', req.query, req.params);

//     let result = await product.getProductList();
//     if (result['statusCode']) {

//         res.status(result['statusCode']);
//     }
//     res.send(
//         result
//     );
// });
productRouter
    .post('', async (req, res) => {
        if (req.body && req.body.name && req.body.owner_id && req.body.price) {
            const product = {
                name: req.body.name,
                status: req.body.status,
                category: req.body.category,
                price: req.body.price,
                subcategory: req.body.subcategory,
                owner_id: req.body.owner_id,
                customizable: req.body.customizable,
                item_options: req.body.item_options,
                image: req.body.image,
                created_date: new Date().valueOf(),
                updated_date: new Date().valueOf()
            };

            let result = await productDao.createProduct(product);
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
        if (req.body && req.body.name && req.body.product_id) {
            const product = {
                product_id: req.body.product_id,
                name: req.body.name,
                status: req.body.status,
                category: req.body.category,
                price: req.body.price,
                subcategory: req.body.subcategory,
                owner_id: req.body.owner_id,
                customizable: req.body.customizable,
                item_options: req.body.item_options,
                image: req.body.image,
                updated_date: new Date().valueOf()
            }
            let result = await productDao.updateProduct(product);
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
            let result = await productDao.getProduct(req.params['id']);
            
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
            let result = await productDao.deleteProduct(req.params['id']);
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
module.exports = productRouter