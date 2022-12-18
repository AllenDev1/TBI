const sequelize = require("../datebase/sequelize");
const Sequelize = require("sequelize");

const NewsLetter = sequelize.define(
    "newsletter",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = NewsLetter;
