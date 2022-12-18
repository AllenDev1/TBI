const router = require("express").Router();
const Faq = require("../models/faq.models");

//create a new faq
router.post("/", async (req, res) => {
	const { question, answer } = req.body;
	try {
		const faq = await Faq.create({
			question,
			answer,
		});
		res.status(201).json(faq);
	} catch (error) {
		res.status(500).json(error);
	}
});

//get all faqs
router.get("/", async (req, res) => {
	try {
		const faqs = await Faq.findAll();
		res.status(200).json(faqs);
	} catch (error) {
		res.status(500).json(error);
	}
});

// delete a faq by id

router.delete("/:id", async (req, res) => {
	try {
		const faq = await Faq.findByPk(req.params.id);
		await faq.destroy();
		res.status(200).json(faq);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
