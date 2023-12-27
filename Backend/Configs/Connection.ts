// ./Connection.js
import { sequelize } from "./sequelize";
import { User } from "../Models/user";

export const Connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        // Log the current state of the model
        console.log(User.describe());

        await User.sync({ force: true });
        console.log("The table for the User model was just (re)created!");
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        // Close the connection when done
        await sequelize.close();
    }
};
