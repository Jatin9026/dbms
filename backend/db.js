const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root1234",
    database: "student_enrollment",
    port: 3306
  });

db.connect((err) => {
  if (err) {
    console.log("DB Connection Error:", err);
  } else {
    console.log("Database Connected Successfully");
  }
});

module.exports = db;
