const MongoClient = require('mongodb').MongoClient;
const path = require("path");
const fs = require('fs');
// 5dff812f31a6fa4785d39231
const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, './environments/db_config_dev.json')));
MongoClient.connect("mongodb://localhost:27017/retro", function (err, db) {
    if (err) {
        console.log('err: ', err);
    } else {
        console.log('db: ', db)
        db.db('retro').collection('users').find( function (error, cursor) {
            if (error) {
                console.log('error: ', error);
            } else {
                cursor.each(function(err, item) {
                    // If the item is null then the cursor is exhausted/empty and closed
                 console.log('item: ', item);
                 
                    // otherwise, do something with the item
                });
            }
            db.close();
        });
    }
});