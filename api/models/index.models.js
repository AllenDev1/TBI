const blogpost = require("./blogpost.models");
const contactfrom = require("./contactForm.models");
const faq = require("./faq.models");
const newsletter = require("./newsLetters.models");
const testimonials = require("./testimonials.models");
const teams = require("./teams.models");
const videosrc = require("./videoSrc.models");
const sequelize = require("../datebase/sequelize");

const blogResourceOptions = {
	properties: {
		text: {
			type: "richtext",
			custom: {
				
			},
		},
	},
};

module.exports = {
	blogpost,
	contactfrom,
	faq,
	newsletter,
	testimonials,
	teams,
	videosrc,
	sequelize,
	blogResourceOptions,
};
