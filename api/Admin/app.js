const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const express = require("express");
const session = require("express-session");
const sqlite = require("better-sqlite3");

const {
	blogpost,
	contactfrom,
	faq,
	newsletter,
	testimonials,
	teams,
	videosrc,
	sequelize,
} = require("../models/index.models");

const AdminJSSequelize = require("@adminjs/sequelize");

const PORT = 5000;

const DEFAULT_ADMIN = {
	email: "admin@admin", // LOAD FROM PROCESS.env
	password: "password", // LOAD FROM PROCESS.env
};

const authenticate = async (email, password) => {
	if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
		return Promise.resolve(DEFAULT_ADMIN);
	}
	return null;
};

AdminJS.registerAdapter({
	Resource: AdminJSSequelize.Resource,
	Database: AdminJSSequelize.Database,
});

const start = async (app) => {
	const admin = new AdminJS({
		rootPath: "/api/admin",
		logoutPath: "/api/admin/logout",
		loginPath: "/api/admin/login",
		databases: [sequelize],
		branding: {
			companyName: "TBI",
			logo: "TBI",
			withMadeWithLove: false,
		},
	});
    console.log("admin says hi")

	const SqliteStore = require("better-sqlite3-session-store")(session);
	const db = new sqlite("sessions.db", { verbose: console.log });

	const sessionStore = new SqliteStore({
		client: db,
		expired: {
			clear: true,
			intervalMs: 900000,
		},
	});

	const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
		admin,
		{
			authenticate,
			cookieName: "adminjs",
			cookiePassword: "sessionsecret",
		},
		null,
		{
			store: sessionStore,
			resave: true,
			saveUninitialized: true,
			secret: "sessionsecret",
			cookie: {
				httpOnly: false, //process.env.NODE_ENV === "production", // Enable only if using SSL
				secure: false, //process.env.NODE_ENV === "production", // Enable only if using SSL
			},
			name: "adminjs",
		}
	);
	app.use(admin.options.rootPath, adminRouter);
};

module.exports = start;
