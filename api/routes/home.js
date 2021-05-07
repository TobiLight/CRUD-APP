const { Router } = require("express");
const route = Router();
route.use("/api", route);
const { homepage } = require("../../controllers/homepage");

route.get("/welcome", homepage);

module.exports = route;
