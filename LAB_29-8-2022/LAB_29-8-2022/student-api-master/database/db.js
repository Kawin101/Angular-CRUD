const mysql = require("mysql");
const dbConfig = require("./db.config");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE,
});

connection.connect((error) => {
  if (error) console.log("Can not connect to database");
  else console.log("Database connented.");
});
module.exports = connection;
