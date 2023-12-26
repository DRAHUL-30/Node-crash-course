import { sequelize } from "./sequelize";
const { DataTypes } = require('sequelize');
import { userModal } from "../Models/user";

export const Connection = async () => {
    let User:any = null;
    try {
        await sequelize.authenticate();
        console.log('User authentication successful.');
        User = userModal(sequelize);
        await sequelize.sync();
        console.log(`Table created successfully`, {User});
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};