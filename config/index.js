const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config = {
  // PORT GOES HERE
  port: parseInt(process.env.PORT, 10),
  // DATABASE URL
  databaseURL: process.env.MONGO_URI,
  //   JWT SECRET
  jwtSecret: process.env.JWT_SECRET,
  // JWT ALGO
  jwtAlgo: process.env.JWT_ALGO,
};

module.exports = config;
