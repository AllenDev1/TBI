const Sequelize = require("sequelize");
const sequelize = require("../datebase/sequelize");

const Team = sequelize.define(
    "team",
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
        position: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        image: {
            type: Sequelize.BLOB,
            allowNull: false,
        },
        description: {
            type: Sequelize.BLOB,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Team;