const express = require('express');
const tableRouter = express.Router();
const tableDao = require('../dao').dao.table;
const flat = require('flat');
const ObjectId = require('mongodb').ObjectId

tableRouter.get('/list', async (req, res) => {
    console.log('req: ', req.query, req.params);
    let result = []
    if (req.query && req.query.owner_id) {
        result = await tableDao.getTableList(req.query.owner_id);
        if (req.query.flat) {
            result = result.map(entry => {
                entry.id = new ObjectId(entry._id).toHexString().toString();
                delete entry._id;
                return flat.flatten(entry)
            });
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

tableRouter.get('/top', async (req, res) => {
    let result = await tableDao.getTableList();
    if (result['statusCode']) {

        res.status(result['statusCode']);
    }
    res.send(
        result
    );
});

// tableRouter.get('/list', async (req, res) => {
//     console.log('req: ', req.query, req.params);

//     let result = await table.getTableList();
//     if (result['statusCode']) {

//         res.status(result['statusCode']);
//     }
//     res.send(
//         result
//     );
// });
tableRouter
    .post('', async (req, res) => {
        console.log('Body: ', req.body);
        
        if (req.body && req.body.name && req.body.owner_id && req.body.seating) {
            const table = {
                name: req.body.name,
                status: req.body.status,
                seating: req.body.seating,
                owner_id: req.body.owner_id,
                created_date: new Date().valueOf(),
                updated_date: new Date().valueOf()

            };

            let result = await tableDao.addTable(table);
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
        if (req.body && req.body.name && req.body.table_id) {
            const table = {
                table_id: req.body.table_id,
                name: req.body.name,
                status: req.body.status,
                seating: req.body.seating,
                owner_id: req.body.owner_id,
                updated_date: new Date().valueOf()
            }
            let result = await tableDao.updateTable(table);
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
            let result = await tableDao.getTable(req.params['id']);

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
            let result = await tableDao.deleteTable(req.params['id']);
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
module.exports = tableRouter