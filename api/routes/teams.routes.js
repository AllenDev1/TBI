const router = require("express").Router();
const Team = require("../models/teams.models");

//create a new team
router.post("/", async (req, res) => {
	const { name, position, image, description } = req.body;
	try {
		const team = await Team.create({
			name,
			position,
			image,
			description,
		});
		res.status(201).json(team);
	} catch (error) {
		res.status(500).json(error);
	}
});

//update a team by id
router.put("/:id", async (req, res) => {
	try {
		const team = await Team.findByPk(req.params.id);
		const { name, position, image, description } = req.body;
		const updatedTeam = await team.update({
			name,
			position,
			image,
			description,
		});
		res.status(200).json(updatedTeam);
	} catch (error) {
		res.status(500).json(error);
	}
});

//get all teams
router.get("/", async (req, res) => {
	try {
		const teams = await Team.findAll();
		res.status(200).json(teams);
	} catch (error) {
		res.status(500).json(error);
	}
});

// delete a team by id
router.delete("/:id", async (req, res) => {
	try {
		const team = await Team.findByPk(req.params.id);
		await team.destroy();
		res.status(200).json(team);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
