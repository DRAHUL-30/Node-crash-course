import { sequelize } from "../Configs/sequelize";
const { DataTypes, Model } = require('sequelize');

class User extends Model {}

User.init({
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

// User.sync({ force: true });

export default User



