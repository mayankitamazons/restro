const express = require('express');
const settingRouter = express.Router();
const settingDao = require('../dao').dao.setting;
const ObjectId = require('mongodb').ObjectId
const flat = require('flat');


settingRouter.post('/top', async (req, res) => {
    console.log('req: ', req.body);
    if (req.body && (req.body.cuisine || req.body.vendor)) {
        let result = [];

        if (req.body.cuisine && req.body.vendor) {
            result = await settingDao.setTopVendorForCuisine(req.body.cuisine, req.body.vendor);
        } else if (req.body.cuisine) {
            result = await settingDao.setTopCategory(req.body.cuisine);
        } else {
            result = await settingDao.setTopVendor(req.body.vendor);
        }
        if (result && result['statusCode']) {
            res.status(result['statusCode']);
        }
        res.send(
            result
        );
    } else {
        res.status(400);
        res.send(
            { error: "Inavlid padedsrameters" }
        );
    }
});

settingRouter.get('/top/vendor', async (req, res) => {
    console.log('req: ', req.query);

    if (req.query && req.query.cuisine) {
        let result = await settingDao.getVendorForCuisine(req.query.cuisine);
        if (result['statusCode']) {

            res.status(result['statusCode']);
        }
        if (req.query.flat) {
            result.id = new ObjectId(result._id).toHexString().toString();
                delete result._id;
                result = flat.flatten(result)
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

settingRouter.get('/top/cuisine', async (req, res) => {
    console.log('req: ', req.query);

    if (req.query && req.query.cuisine) {
        let result = await settingDao.getTopCategory(req.query.cuisine);
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
// settingRouter
//     .post('', async (req, res) => {
//         if (req.body && req.body.email && req.body.password) {
//             const user = {
//                 email: req.body.email,
//                 password: req.body.password,
//                 name: req.body.name || '',
//                 mobile: req.body.mobile,
//                 address: req.body.address || '',
//                 role: 'Manager',
//                 status: req.body.status,
//                 city: req.body.city,
//                 owner_id: req.body.owner_id,
//                 permission: req.body.permission,
//                 area: req.body.area

//             };
//             console.log('user: ', user);
//             let result = await settingDao.createStaff(user);
//             if (result['statusCode']) {

//                 res.status(result['statusCode']);
//             }
//             res.send(
//                 result
//             );
//         } else {
//             res.status(400);
//             res.send(
//                 { error: "Inavlid parameters" }
//             );
//         }
//     })`
// .put('', async (req, res) => {
//     if (req.body && req.body.email && req.body._id) {
//         const user = {
//             email: req.body.email,
//             name: req.body.name,
//             mobile: req.body.mobile,
//             address: req.body.address,
//             status: req.body.status,
//             city: req.body.city,
//             owner_id: req.body.owner_id,
//             permission: req.body.permission,
//             area: req.body.area

//         }
//         let result = await settingDao.updateStaff(user);
//         if (result['statusCode']) {

//             res.status(result['statusCode']);
//         }
//         res.send(
//             result
//         );
//     } else {
//         res.status(400);
//         res.send(
//             { error: "Inavlid parameters" }
//         );
//     }
// })
//    
// .get('/:id', async (req, res) => {
//     if (req.params && req.params['id']) {
//         console.log('takatak req: ', req.params);
//         let result = await settingDao.getStaff(req.params['id']);
//         if (result['statusCode']) {
//             res.status(result['statusCode']);
//         }
//         res.send(
//             result
//         );
//     } else {
//         res.status(400);
//         res.send(
//             { error: "Inavlid parameters" }
//         );
//     }
// })
// .delete('/:id', async (req, res) => {
//     if (req.params && req.params['id']) {
//         console.log('eq: ', req.params);
//         let result = await settingDao.deleteStaff(req.params['id']);
//         if (result['statusCode']) {
//             res.status(result['statusCode']);
//         }
//         res.send(
//             result
//         );
//     } else {
//         res.status(400);
//         res.send(
//             { error: "Inavlid parameters" }
//         );
//     }
// })
module.exports = settingRouter;