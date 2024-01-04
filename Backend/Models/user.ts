import { sequelize } from "../Configs/sequelize";
import { DataTypes, Model } from 'sequelize';

// Define the User model
class User extends Model {}

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true  // If allowNull is true, it defaults to true
},
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'User'
});

// Export the User model
export default User;