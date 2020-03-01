const fs = require('fs');
const path = require("path");
// const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../environments/db_config_local.json')));
const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../environments/db_config_dev.json')));

exports.dao = {
    auth: require('./auth')(config.connection_string),
    vendor: require('./vendor')(config.connection_string),
    user: require('./user')(config.connection_string),
    staff: require('./staff')(config.connection_string),
    area: require('./area')(config.connection_string),
    offer: require('./offer')(config.connection_string),
    setting: require('./setting')(config.connection_string),
    manager: require('./manager')(config.connection_string),
    subcategory: require('./subcategory')(config.connection_string),
    product: require('./product')(config.connection_string),
    category: require('./category')(config.connection_string),
    dashboard: require('./dashboard')(config.connection_string),
    table: require('./table')(config.connection_string),
    order: require('./order')(config.connection_string)
};