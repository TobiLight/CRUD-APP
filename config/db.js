const mongoose = require("mongoose");

const db = async () => {
  try {
    const dbconnection = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(
      `Database Connected\nDatabase Url: ${dbconnection.connection.host}`
    );
    return dbconnection;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = { db };
