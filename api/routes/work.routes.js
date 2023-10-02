const express = require("express");
const router = express.Router();

const Work = require("../models/work.models");

//get all works
router.get("/", async (req, res) => {
	try {
		const works = await Work.findAll();
		res.status(200).json(works);
	} catch (error) {
		res.status(500).json(error);
	}
});

//get a work by id

router.get("/:id", async (req, res) => {
	try {
		const work = await Work.findByPk(req.params.id);
		res.status(200).json(work);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
