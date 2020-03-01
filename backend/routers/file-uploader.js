const express = require('express');
const fileRouter = express.Router();
const flat = require('flat');
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require("path");

const aws_config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../environments/credentials.json')));

fileRouter
    .post('', async (req, res) => {
        if (req.body && req.body.file && req.body.file_name) {
            console.log('config: ', aws_config);
            const config = {
                accessKeyId: aws_config['access_key_id'],
                secretAccessKey: aws_config['secret_key'],
                region: aws_config['region']
            };
            const s3 = new AWS.S3(config, {
                apiVersion: '2013-04-01'
            });
            // AWS.config.credentials = config;
            const params = {
                Bucket: aws_config['bucket_name'],
                Key: req.body.file_name,
                Body: new Buffer(req.body.file.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64'),
                ACL: 'public-read',
                ContentType: 'binary',
                CacheControl: 'max-age=172800'
            };

            console.log('params: ', params, AWS.config);
            s3.putObject(params, (error, data) => {
                console.log('Error:', error, 'data: ', data);
                if (error) {
                    res.status(400);
                    res.send({
                        error: error
                    })
                } else {
                    // https://food-order-images-dev.s3.ap-south-1.amazonaws.com/_iconfinder_189_Kaggle_logo_logos_4373210.png
                    const param = {
                        image_url: 'https://' + aws_config['bucket_name'] + '.s3.' + aws_config['region'] + '.amazonaws.com/' + req.body.file_name
                    };
                    res.send(param);
                }
            })
        } else {
            res.status(400);
            res.send(
                { error: "Inavlid parameters" }
            );
        }
    })

module.exports = fileRouter