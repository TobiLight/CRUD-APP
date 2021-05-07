const jwt = require("jsonwebtoken");
const argon = require("argon2");
const User = require("../models/User");

class Auth {
  constructor() {
    this.userModel = User;
  }

  async Signup(firstname, lastname, email, country) {
    const user = {
      name: firstname + " " + lastname,
      email,
      country,
    };

    return user;
  }
}

module.exports = Auth;
