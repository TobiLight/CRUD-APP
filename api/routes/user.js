const { Router } = require("express");
const route = Router();
const {
  addUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../../controllers/user");

route.post("/create/user", addUser);
route.get("/user", getUser);
route.get("/users", getUsers);
route.patch("/update/user", updateUser);
route.delete("/delete/user", deleteUser);

module.exports = route;
