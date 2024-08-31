const blogpost = require("./blogpost.models");
const contactfrom = require("./contactForm.models");
const faq = require("./faq.models");
const newsletter = require("./newsLetters.models");
const testimonials = require("./testimonials.models");
const teams = require("./teams.models");
const videosrc = require("./videoSrc.models");
const sequelize = require("../datebase/sequelize");
const work = require("./work.models");
const User = require("./user.model");

// Define association with Work model
User.hasMany(work); // Each user can have many works
work.belongsTo(User)

module.exports = {
	blogpost,
	contactfrom,
	faq,
	newsletter,
	testimonials,
	teams,
	videosrc,
	sequelize,
	work,
	User,
};
