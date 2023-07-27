const express = require("express");
const app = express();
const port = 80;
const mysql = require('mysql');
const db = mysql.createConnection({   host: "db",   user: "root",   password: "1234", database: "vue-docker2" });

db.connect(function(err) {   if (err) throw err;   console.log("Connecté à la base de données MySQL !"); });

// db.query("CREATE DATABASE mabdd", function (err, result) {       if (err) throw err;       console.log("Base de données créée !");     });
db.query("SELECT * FROM count", function (err, result) {       if (err) throw err;       console.log(result);     });

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});

app.listen(port);