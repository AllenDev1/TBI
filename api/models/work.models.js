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
		client: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		categories: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		image: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		text: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = Work;
