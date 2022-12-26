const express = require("express");
const router = express.Router();

const BlogPost = require("../models/blogpost.models");

//create a new blog post
router.post("/", async (req, res) => {
	const { title, client, categories, image, text } = req.body;
	try {
		const blogPost = await BlogPost.create({
			title,
			client,
			categories,
			image,
			text,
		});
		res.status(201).json(blogPost);
	} catch (error) {
		res.status(500).json(error);
	}
});

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

//update a blog post by id
router.put("/:id", async (req, res) => {
	try {
		const blogPost = await BlogPost.findByPk(req.params.id);
		const { title, client, categories, image, text } = req.body;
		const updatedBlogPost = await blogPost.update({
			title,
			client,
			categories,
			image,
			text,
		});
		res.status(200).json(updatedBlogPost);
	} catch (error) {
		res.status(500).json(error);
	}
});

//delete a blog post by id
router.delete("/:id", async (req, res) => {
	try {
		const blogPost = await BlogPost.findByPk(req.params.id);
		await blogPost.destroy();
		res.status(200).json(blogPost);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
