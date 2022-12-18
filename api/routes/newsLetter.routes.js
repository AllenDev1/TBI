const router = require("express").Router();

const NewsLetter = require("../models/newsLetters.models");

//create a new newsletter
router.post("/", async (req, res) => {
	const { email } = req.body;
	try {
		const newsLetter = await NewsLetter.create({
			email,
		});
		res.status(201).json(newsLetter);
	} catch (error) {
		res.status(500).json(error);
	}
});

//get all newsletters
router.get("/", async (req, res) => {
	try {
		const newsLetters = await NewsLetter.findAll();
		res.status(200).json(newsLetters);
	} catch (error) {
		res.status(500).json(error);
	}
});

// delete a newsletter by id
router.delete("/:id", async (req, res) => {
	try {
		const newsLetter = await NewsLetter.findByPk(req.params.id);
		await newsLetter.destroy();
		res.status(200).json(newsLetter);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;