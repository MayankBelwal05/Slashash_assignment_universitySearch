
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('university', 'root', 'mayank', {
    host: 'localhost',
    dialect: "mysql"
});

module.exports = {
    sequelize
};
