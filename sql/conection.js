const connection = require('mysql2')
require("dotenv").config()

const conection = connection.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
});

module.exports = conection;