import { sequelize } from "./sequelize";
import User from "../Models/user";

export const Connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
        // User.sync({ force: true });
        // console.log('User created successfully')
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    // finally {
    //     // Close the connection when done
    //     await sequelize.close();
    // }
};
