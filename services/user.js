const User = require("../models/User");

/**
 *
 */

class App {
  constructor() {
    this.userModel = User;
  }

  async UserExists(email) {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async CreateUser(firstname, lastname, email, country) {
    const newUser = await this.userModel.create({
      name: firstname + " " + lastname,
      email,
      country,
    });

    return newUser;
  }

  async GetUser(email) {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async GetUsers() {
    const users = await this.userModel.find();
    return users;
  }

  async UpdateUser(firstname, lastname, email, country) {
    const userFullName = firstname + " " + lastname;

    const user = await this.userModel.findOneAndUpdate(
      { email },
      { name: userFullName, country },
      { upsert: true },
      (err, doc) => {
        if (err) {
          return err;
        }

        return doc;
      }
    );
  }

  async DeleteUser(email) {
    const user = await this.userModel.findOneAndDelete({ email });
    return user;
  }
}

module.exports = App;
