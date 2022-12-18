const router = require("express").Router();
const VideoSrc = require("../models/videoSrc.models");

//create a new videoSrc
router.post("/", async (req, res) => {
	const { src } = req.body;
	try {
		const videoSrc = await VideoSrc.create({
			src,
		});
		res.status(201).json(videoSrc);
	} catch (error) {
		res.status(500).json(error);
	}
});

//get all videoSrcs
router.get("/", async (req, res) => {
	try {
		const videoSrcs = await VideoSrc.findAll();
		res.status(200).json(videoSrcs);
	} catch (error) {
		res.status(500).json(error);
	}
});

// delete a videoSrc by id

router.delete("/:id", async (req, res) => {
	try {
		const videoSrc = await VideoSrc.findByPk(req.params.id);
		await videoSrc.destroy();
		res.status(200).json(videoSrc);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
