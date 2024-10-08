const express = require("express");
const router = express.Router();

const BlogPost = require("../models/blogpost.models");

//get all blog posts
router.get("/", async (req, res) => {
	try {
		const blogPosts = await BlogPost.findAll();
		res.status(200).json(blogPosts);
	} catch (error) {
		res.status(500).json(error);
	}
});

//get a blog post by id
router.get("/:id", async (req, res) => {
	try {
		const blogPost = await BlogPost.findByPk(req.params.id);
		res.status(200).json(blogPost);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
