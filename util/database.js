const mysql = require('mysql2');

const config = require('../config/config.json');
const localconfig = require('../config/localconfig.json');

const pool = mysql.createPool({
    host: config.host,
    user: localconfig.user,
    database: config.database,
    password: localconfig.password,
})

module.exports = pool.promise();