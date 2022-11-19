const dotenv = require("dotenv");
dotenv.config();
// Exporting env variable
module.exports = {
  NEXT_PUBLIC_CLIENT_ID: process.env.CLIENT_ID,
  NEXT_PUBLIC_CLIENT_SECRET: process.env.CLIENT_SECRET
};