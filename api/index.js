require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// const { CONNECTION } = require("./src/config/dbConnection");
const Blog_post_routes = require("./routes/blogPost.routes");
const Faq_routes = require("./routes/faq.routes");
const NewsLetter_routes = require("./routes/newsLetter.routes");
const Team_routes = require("./routes/teams.routes");
const Contact_form_routes = require("./routes/contactForm.routes");
const Testimonials_routes = require("./routes/testimonials.routes");
const Video_src_routes = require("./routes/videoSrc.routes");

const path = require("path");
const sequelize = require("./datebase/sequelize");
const startAdmin = require("./Admin/app");
const app = express();
const port = process.env.PORT || 3001;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const morganBody = require("morgan-body");
morganBody(app);

sequelize.sync({});

startAdmin(app);

app.use(cors({ origin: true, credentials: true }));

app.use("/api/blog", Blog_post_routes);
app.use("/api/faq", Faq_routes);
app.use("/api/newsletter", NewsLetter_routes);
app.use("/api/team", Team_routes);
app.use("/api/message", Contact_form_routes);
app.use("/api/testimonials", Testimonials_routes);
app.use("/api/videosrc", Video_src_routes);


// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
