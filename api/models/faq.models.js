const sequelize = require("../datebase/sequelize");
const { DataTypes } = require("sequelize");

const Faq = sequelize.define(
    "faq",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Faq;
