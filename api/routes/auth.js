const { Router } = require("express");
const route = Router();
route.use("/api", route);
const { authController } = require("../../controllers/auth");

route.post("/auth/login", authController);

module.exports = route;
