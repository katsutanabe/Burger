const mysql = require('mysql');
//let connection;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });


connection.connect();

module.exports = connection;