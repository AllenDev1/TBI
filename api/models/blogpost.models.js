const Sequelize = require("sequelize");
const sequelize = require("../datebase/sequelize");

const BlogPost = sequelize.define(
	"blogpost",
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
			type: Sequelize.BLOB,
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

module.exports = BlogPost;
