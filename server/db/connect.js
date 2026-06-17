require('dotenv').config();
const { createPool } = require('mysql2');

const db = createPool({
    host:process.env.HOST,
    user:process.env.USER1,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    port:process.env.DB_PORT
}).promise();

module.exports=db;