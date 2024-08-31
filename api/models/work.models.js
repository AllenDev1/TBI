// work.model.js
const Sequelize = require("sequelize");
const sequelize = require("../datebase/sequelize");

const Work = sequelize.define(
	"work",
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		categories: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		image: {
			type: Sequelize.STRING,
			// allowNull: false,
		},
		concept: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		description: {
			type: Sequelize.TEXT,
			// allowNull: false,
		},
		creditName: {
			type: Sequelize.STRING, // Assuming the name is a string
			// allowNull: false,
			field: "credit_name", // to define the column name in database
		},
		creditEmail: {
			type: Sequelize.STRING, // Assuming email is a string
			// allowNull: false,
			field: "credit_email", // to define the column name in database
		},
	},
	{
		underscored: true,
		timestamps: true,
	}
);

module.exports = Work;
