process.env.NODE_ENV = process.env.NODE_ENV || "development";

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
