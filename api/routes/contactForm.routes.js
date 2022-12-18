const router = require("express").Router();
const ContactForm = require("../models/contactForm.models")

//create a new contact form
router.post("/", async (req, res) => {
	const { name, email, message } = req.body;
	try {
		const contactForm = await ContactForm.create({
			name,
			email,
			message,
		});
		res.status(201).json(contactForm);
	} catch (error) {
		res.status(500).json(error);
	}
});

//get all contact forms
router.get("/", async (req, res) => {
	try {
		const contactForms = await ContactForm.findAll();
		res.status(200).json(contactForms);
	} catch (error) {
		res.status(500).json(error);
	}
});

// delete a contact form by id
router.delete("/:id", async (req, res) => {
	try {
		const contactForm = await ContactForm.findByPk(req.params.id);
		await contactForm.destroy();
		res.status(200).json(contactForm);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
