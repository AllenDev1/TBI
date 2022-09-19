const mysql = require("mysql");

let con = mysql.createConnection({
	host: "host.docker.internal",
	user: "root",
	password: "password",
    database: "mydatabase"
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});

module.exports.CONNECTION = con;
