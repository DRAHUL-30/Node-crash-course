const { DataTypes, Model } = require('sequelize');
// import { sequelize } from "../Configs/sequelize";

class User extends Model { }

export const userModal = (sequelize:any) => {
    return User.init({
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
        }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'User' // We need to choose the model name
    });
}

// console.log(User === sequelize.models.User);