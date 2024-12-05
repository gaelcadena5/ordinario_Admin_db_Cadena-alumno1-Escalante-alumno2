const connection = require('mysql2')
require("dotenv").config()

connection.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
});

module.exports = connection;