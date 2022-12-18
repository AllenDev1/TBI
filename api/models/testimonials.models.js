const Sequelize = require("sequelize");
const sequelize = require("../datebase/sequelize");

const Testimonial = sequelize.define(
    "testimonial",
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
            allowNull: true,
        },
        image: {
            type: Sequelize.BLOB,
            allowNull: true,
        },
        text: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Testimonial;
