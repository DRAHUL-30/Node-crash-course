require('dotenv').config();

module.exports = {
  development: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // You may need to set this to false in development
        // Other SSL options if needed
      },
    },
  },
  // Add other environments (production, testing) if needed
};
