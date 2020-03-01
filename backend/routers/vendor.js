const express = require('express');
const vendorRouter = express.Router();
const vendor = require('../dao').dao.vendor;
const flat = require('flat');
const ObjectId = require('mongodb').ObjectId

vendorRouter.get('/list', async (req, res) => {
    console.log('req: ', req.query, req.params);
    let result = []
    if (req.query && req.query.cuisine) {
        result = await vendor.getVendorListByCategory(req.query.cuisine);
    } else {
        result = await vendor.getVendorList();
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

vendorRouter.get('/top', async (req, res) => {
    let result = await vendor.getVendorList();
    if (result['statusCode']) {

        res.status(result['statusCode']);
    }
    res.send(
        result
    );
});

// vendorRouter.get('/list', async (req, res) => {
//     console.log('req: ', req.query, req.params);

//     let result = await vendor.getVendorList();
//     if (result['statusCode']) {

//         res.status(result['statusCode']);
//     }
//     res.send(
//         result
//     );
// });
vendorRouter
    .post('', async (req, res) => {
        if (req.body && req.body.email && req.body.mobile && req.body.password) {
            const user = {
                email: req.body.email,
                password: req.body.password,
                name: req.body.name || '',
                mobile: req.body.mobile,
                address: req.body.address || '',
                role: 'Vendor',
                status: req.body.status,
                area: req.body.area,
                gst_no: req.body.gst_no,
                contact_person_name: req.body.contact_person_name,
                whatsapp_no: req.body.whatsapp_no,
                restaurant_category: req.body.restaurant_category,
                cuisine: req.body.cuisine,
                state: req.body.state,
                rating: req.body.rating,
                is_top_restaurant: req.body.is_top_restaurant,
                branches: req.body.branches,
                image: req.body.image,
                created_date: new Date().valueOf(),
                updated_date: new Date().valueOf()
            };

            let result = await vendor.createVendor(user);
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
        if (req.body && req.body.email && req.body.vendor_id) {
            const user = {
                vendor_id: req.body.vendor_id,
                email: req.body.email,
                name: req.body.name,
                mobile: req.body.mobile,
                address: req.body.address,
                status: req.body.status,
                area: req.body.area,
                gst_no: req.body.gst_no,
                contact_person_name: req.body.contact_person_name,
                whatsapp_no: req.body.whatsapp_no,
                restaurant_category: req.body.restaurant_category,
                cuisine: req.body.cuisine,
                state: req.body.state,
                rating: req.body.rating,
                is_top_restaurant: req.body.is_top_restaurant,
                branches: req.body.branches,
                image: req.body.image,
                updated_date: new Date().valueOf()
            }
            let result = await vendor.updateVendor(user);
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
            let result = await vendor.getVendor(req.params['id']);
          
            if (result._id) {
                delete result._id; 
             }

            if (req.query.flat) {
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
            let result = await vendor.deleteVendor(req.params['id']);
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
module.exports = vendorRouter