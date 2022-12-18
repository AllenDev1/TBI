const Sequelize = require("sequelize");
const sequelize = require("../datebase/sequelize");

const ContactForm = sequelize.define(
    "contactform",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        message: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = ContactForm;
