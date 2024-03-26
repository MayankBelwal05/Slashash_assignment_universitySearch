const { sequelize } = require("./connect")

const {DataTypes} = require("sequelize")

const University = sequelize.define("university", {
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    state_province: DataTypes.STRING,
    web_pages: DataTypes.JSON,
})

module.exports = {
    University
}