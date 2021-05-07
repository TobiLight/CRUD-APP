require("dotenv").config();
const express = require("express");
const http = require("http");

const bodyParser = require("body-parser");
// const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const logger = require("morgan");
const { db } = require("./loaders/mongoose.js");

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CORS_PROD
        : process.env.CORS_LOCAL,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (app.get("env") === "production") {
  app.set("trust proxy", 1);
}
// app.use(session(sess));
app.disable("x-powered-by");

app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json({ limit: "10kb" }));

// Data Sanitization against NoSQL Injection Attacks
// app.use(mongoSanitize());

// Data Sanitization against XSS attacks
// app.use(xss());

// DB here
db();

//  route here

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log("Server is up and running...");
});
