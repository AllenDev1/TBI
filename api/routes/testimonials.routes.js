const router = require("express").Router();
const Testimonial = require("../models/testimonials.models");

//create a new testimonial
router.post("/", async (req, res) => {
	const { name, text, position, image } = req.body;
	try {
		const testimonial = await Testimonial.create({
			name,
            position,
            image,
			text,
		});
		res.status(201).json(testimonial);
	} catch (error) {
		res.status(500).json(error);
	}
});

//get all testimonials
router.get("/", async (req, res) => {
	try {
		const testimonials = await Testimonial.findAll();
		res.status(200).json(testimonials);
	} catch (error) {
		res.status(500).json(error);
	}
});

// delete a testimonial by id

router.delete("/:id", async (req, res) => {
	try {
		const testimonial = await Testimonial.findByPk(req.params.id);
		await testimonial.destroy();
		res.status(200).json(testimonial);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
