const express = require('express');
const dashboardRouter = express.Router();
const dashboardDao = require('../dao').dao.dashboard;
const ObjectId = require('mongodb').ObjectId
const flat = require('flat');


dashboardRouter.get('/admin', async (req, res) => {
    console.log('req: ', req.query);

    let result = await dashboardDao.getAdminStats();
    if (result['statusCode']) {

        res.status(result['statusCode']);
    }
    res.send(
        result
    );

});


dashboardRouter.get('/vendor', async (req, res) => {
    console.log('req: ', req.query);
    if (req.query && req.query.vendor_id) {
        let result = await dashboardDao.getVendorStats(req.query.vendor_id);
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

module.exports = dashboardRouter;