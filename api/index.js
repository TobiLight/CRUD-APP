const { Router } = require("express");
const router = Router();
const authRoute = require("./routes/auth");
const homeRoute = require("./routes/home");

router.use("/", authRoute);
router.use("/", homeRoute);

module.exports = router;
