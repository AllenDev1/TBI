// user.model.js
const Sequelize = require("sequelize");
const sequelize = require("../datebase/sequelize");
const work = require("./work.models");

const User = sequelize.define(
	"user",
	{
		firstName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		lastName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		role: {
			type: Sequelize.ENUM("Admin", "User"),
			allowNull: false,
		},
	},
	{
		underscored: true,
		// timestamps: true,
	}
);

module.exports = User;
