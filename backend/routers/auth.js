const express = require('express');
const authRouter = express.Router();
const auth = require('../dao').dao.auth;
const ObjectId = require('mongodb').ObjectId
const flat = require('flat');

authRouter
    .post('/login', async (req, res) => {
        console.log('Res: ', req.body);
        
        if (req.body && req.body.email && req.body.password) {
            let result = await auth.login(req.body.email, req.body.password);
console.log('Result: ', result);
            if (result._id) {
               result._id = new ObjectId(result._id).toHexString().toString(); 
            }
            if (req.query.flat) {
                result = flat.flatten(result)
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
    authRouter.post('/login/user', async (req, res) => {
        if (req.body && req.body.mobile && req.body.password) {
                let result = await auth.userLogin(req.body.mobile, req.body.password);
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
    authRouter.post('/register/user', async (req, res) => {
        console.log('req: ', req.body);
        
        if (req.body && req.body.email && req.body.mobile && req.body.password) {
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
            };
                let result = await auth.userRegister(user);
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
    // .get('/users', async (req, res) => {
    //     let result = await auth.getTables('SHOW Tables');
    //     res.send({
    //         result: result
    //     });

    // });
module.exports = authRouter