const express = require('express');
const offerRouter = express.Router();
const offerDao = require('../dao').dao.offer;
const flat = require('flat');

const ObjectId = require('mongodb').ObjectId


offerRouter.get('/list', async (req, res) => {
    if (req.query && req.query.owner_id) {
        let result = await offerDao.getOfferList(req.query.owner_id);
        if (req.query.flat) {
            result = result.map(entry => flat.flatten(entry));
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

offerRouter
    .post('', async (req, res) => {
        console.log('rweq: ', req.body);
        
        if (req.body && req.body.name && req.body.owner_id && req.body.status) {
            console.log('Req: ', req.body);
            
            const offer = {
                offer_id: req.body.offer_id,
                name: req.body.name,
                status: req.body.status,
                owner_id: req.body.owner_id,
                off: req.body.off,
                coupon_code: req.body.coupon_code,
                off_type: req.body.off_type,
                min_value:  req.body.min_value,
                max_value:  req.body.max_value,
                validity:  req.body.validity,
                created_date: new Date().valueOf(),
                updated_date: new Date().valueOf()
            }
            let result = await offerDao.addOffer(offer);
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
        if (req.body && req.body.name && req.body._id && req.body.status) {
            const offer = {
                _id: req.body._id,
                name: req.body.name,
                status: req.body.status,
                owner_id: req.body.owner_id,
                off: req.body.off,
                coupon_code: req.body.coupon_code,
                off_type: req.body.off_type,
                min_value:  req.body.min_value,
                max_value:  req.body.max_value,
                validity:  req.body.validity,
                updated_date: new Date().valueOf()
            }
            let result = await offerDao.updateOffer(offer);
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
            let result = await offerDao.getOffer(req.params['id']);
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
            let result = await offerDao.deleteOffer(req.params['id']);
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
module.exports = offerRouter