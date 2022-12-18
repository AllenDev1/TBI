const Sequelize = require("sequelize");
const sequelize = require("../datebase/sequelize");

const VideoSrc = sequelize.define(
    "videosrc",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        src: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = VideoSrc;
