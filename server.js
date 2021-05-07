const { app } = require("./loaders/app");
const { db } = require("./loaders/mongoose.js");
const config = require("./config/index");
const http = require("http");

async function startServer() {
  const server = http.createServer(app);
  await db();
  server.listen(config.port, () => {
    console.log("Server is up and running...");
  });
}

startServer();
