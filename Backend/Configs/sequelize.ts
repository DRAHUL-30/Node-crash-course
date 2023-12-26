const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.development)

// const const sequelize = new Sequelize(db, user, password, {
//     host,
//     logging: false,
//     port,
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//     },
//     dialect: "postgres"
// });

export { sequelize }