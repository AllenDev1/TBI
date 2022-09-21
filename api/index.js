const express = require("express");
const bodyParser = require("body-parser");

const { CONNECTION } = require("./src/config/dbConnection");

const app = express();
const port = 3000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/showarticles", (req, res) => {
	let query = `SELECT * FROM Articles`;
	CONNECTION.query(query, function (err, result, fields) {
		if (err) throw err;
		res.send(result);
	});
});

app.post("/postarticle", (req, res) => {
	const articleTitle = req.body.title;
	const articleDescription = req.body.description;
	const articleAuthor = req.body.author;
	const articleClient = req.body.client;
	const articleCatogeries = req.body.categories;

	let query = `INSERT INTO Articles (title, content, author, Client, Categories) VALUES (?, ?, ?, ? ,?);`;
	CONNECTION.query(
		query,
		[
			articleTitle,
			articleDescription,
			articleAuthor,
			articleClient,
			articleCatogeries,
		],
		(err, result) => {
			if (err) throw err;
			res.sendStatus(200);
		}
	);
});
app.post("/deleteatricle", (req, res) => {
	const articleID = req.body.id;
	let query = `DELETE FROM Articles WHERE id = ${articleID};`;
	CONNECTION.query(query, (err, result) => {
		if (err) throw err;
		res.sendStatus(200);
	});
});

app.post("/updatearticles", (req, res) => {
	const updateTitle = req.body.title;
	const updateDescriprion = req.body.description;
	const updatedID = req.body.id;

	let query = `UPDATE Articles SET title = "${updateTitle}", content= "${updateDescriprion}" WHERE id = ${updatedID}`;
	CONNECTION.query(query, (err, result) => {
		if (err) throw err;
		res.sendStatus(200);
	});
});

app.post("/postmessage", (req, res) => {
	const name = req.body.name;
	const message = req.body.message;
	const email = req.body.email;
	let query = `INSERT INTO Message (Name, Email, Message) VALUES ("${name}", "${message}", "${email}")`;
	CONNECTION.query(query, (err, result) => {
		if (err) throw err;
		res.sendStatus(200);
	});
});
app.get("/message", (req, res) => {
	let query = `SELECT * FROM Message`;
	CONNECTION.query(query, function (err, result, fields) {
		if (err) throw err;
		res.send(result);
	});
});

app.post("/mail", (req, res) => {
	const Email = req.body.email;
	let query = `INSERT INTO Mail_list ( Email) VALUES ( "${Email}")`;
	CONNECTION.query(query, (err, result) => {
		if (err) throw err;
		res.sendStatus(200);
	});
});

app.post("/blog", (req, res) => {
	const title = req.body["title"];
	const categories = req.body["categories"];
	const thumbnail = req.body["thumbnail"];
	const text = req.body["text"];
	const client = req.body["client"];

	let query =
		"INSERT INTO Blog_post (Title, Categories, Thumbnail, Text, Client) VALUES (?, ?, ?, ?, ?)";

	CONNECTION.query(
		query,
		[title, categories, thumbnail, text, client],
		(err, result) => {
			if (err) throw err;
			res.sendStatus(200);
		}
	);
});

app.get("/blog/:id", (req, res) => {
	const id = req.params.id;

	let query = `SELECT ID, Title, Categories, Thumbnail, CONVERT(Text USING utf8) AS Text, Date FROM Blog_post WHERE id = ${id}`;

	CONNECTION.query(query, (err, result) => {
		if (err) throw err;
		res.send(result[0]);
	});
});
app.get("/allblog", (req, res) => {
	let query = `SELECT * FROM Blog_post`;
	CONNECTION.query(query, function (err, result) {
		if (err) throw err;
		res.send(result);
	});
});

app.post("/addteam", (req, res) => {
	const name = req.body.name;
	const job = req.body.job;
	const image = req.body.image;

	let query = "INSERT INTO Teams_Table (Name, Job, Image) VALUES (? , ?, ?)";

	CONNECTION.query(query, [name, job, image], (err, result) => {
		if (err) throw err;
		res.sendStatus(200);
	});
});

app.get("/addteamlist", (req, res) => {
	let query = `SELECT * FROM Teams_Table`;
	CONNECTION.query(query, function (err, result) {
		if (err) throw err;
		res.send(result);
	});
});

app.post("/testimonials", (req, res) => {
	const name = req.body.name;
	const image = req.body.image;
	const comment = req.body.comment;
	const userInfo = req.body.userInfo;
	const rating = req.body.rating;

	let query =
		"INSERT INTO Testimonials (Name, Image, Comment, User_info, Rating) VALUES (? , ? , ? , ? , ?)";

	CONNECTION.query(
		query,
		[name, image, comment, userInfo, rating],
		(err, result) => {
			if (err) throw err;
			res.sendStatus(200);
		}
	);
});

app.get("/testimonialslist", (req, res) => {
	let query = `SELECT * FROM Testimonials`;
	CONNECTION.query(query, function (err, result) {
		if (err) throw err;
		res.send(result);
	});
});

app.post("/faq", (req, res) => {
	const title = req.body.title;
	const answer = req.body.answer;

	let query = "INSERT INTO faq (Title, Answers) VALUES (?, ?)";

	CONNECTION.query(query, [title, answer], (err, result) => {
		if (err) throw err;
		res.sendStatus(200);
	});
});

app.get("/faqlist", (req, res) => {
	let query = `SELECT * FROM faq`;
	CONNECTION.query(query, function (err, result) {
		if (err) throw err;
		res.send(result);
	});
});

app.post("/videosrcadd", (req, res) => {
	const src = req.body.src;

	let query = "INSERT INTO video_src (Src) VALUES (?)";

	CONNECTION.query(query, [src], (err, result) => {
		if (err) throw err;
		res.sendStatus(200);
	});
});

app.get("/videosrc", (req, res) =>{
	let query = `SELECT * FROM video_src`
	CONNECTION.query(query, (err, result) =>{
		if(err) throw err;
		res.send(result);
	})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
