import { sequelize } from "./sequelize";

export const Connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('User authentication successful.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

// Example usage in your application

// const { Sequelize, DataTypes } = require('sequelize');
// const config = require('./config');

// const sequelize = new Sequelize(config.development);

// const User = require('./models/user')(sequelize, DataTypes);

// async function getAllUsers() {
//   try {
//     await sequelize.authenticate(); // Test the connection
//     console.log('Connection has been established successfully.');

//     const users = await User.findAll();
//     console.log(users);
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   } finally {
//     await sequelize.close(); // Close the connection when done
//   }
// }

// getAllUsers();
