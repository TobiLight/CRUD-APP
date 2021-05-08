const dotenv = require("dotenv").config();

// process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv;
if (envFound.error) {
  // This error should crash whole process
  console.log(envFound.error);
  // throw new Error("⚠️  Couldn't find .env file  ⚠️");
  throw new Error(envFound.error);
}

const config = {
  // PORT GOES HERE
  port: parseInt(process.env.PORT, 10),
  // DATABASE URL
  databaseURL:
    process.env.NODE_ENV === "production"
      ? process.env.MONGO_URL
      : process.env.MONGO_URI,
  //   JWT SECRET
};

module.exports = config;
