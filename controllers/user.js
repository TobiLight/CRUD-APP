const App = require("../services/user");

exports.addUser = async (req, res, next) => {
  const { firstname, lastname, email, country } = req.body;

  if (!firstname || !lastname || !email || !country) {
    return res.status(400).json({
      message: "⚠️  One or more fields are missing!  ⚠️",
    });
  }

  const user = new App();
  const userExists = await user.UserExists(email);

  if (userExists) {
    return res.status(400).json({
      message: "⚠️  Account already exists  ⚠️",
    });
  }

  try {
    const newUser = await user.CreateUser(firstname, lastname, email, country);
    res.status(201).json({
      message: "✅ User created successfully.",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

exports.getUser = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      message: "⚠️ You cannot search for a user without their email! ⚠️",
    });
  }

  const user = new App();
  const getuser = await user.GetUser(email);

  if (!getuser) {
    return res.status(404).json({
      message: "⚠️ Account does not exist ⚠️",
    });
  }

  res.status(200).json({
    message: "✅ User found",
    data: getuser,
  });
};

exports.getUsers = async (req, res, next) => {
  const app = new App();
  const users = await app.GetUsers();

  res.status(200).json({
    message: `✅ ${users.length} users found`,
    data: users,
  });
};

exports.updateUser = async (req, res, next) => {
  const { firstname, lastname, email, country } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "⚠️ You must enter an email to update user data! ⚠️",
    });
  }

  const app = new App();
  const userExists = await app.UserExists(email);

  if (!userExists) {
    return res.status(400).json({
      message: "⚠️  Account does not exist!  ⚠️",
    });
  }

  try {
    userExists.name = firstname + " " + lastname;
    userExists.country = country;
    userExists.save();
    res.status(200).json({
      message: "✅ User data has been updated!",
      data: userExists,
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      message: "⚠️ You must enter an email to delete a user! ⚠️",
    });
  }

  const app = new App();
  const userExists = await app.UserExists(email);

  if (!userExists) {
    return res.status(400).json({
      message: "⚠️  Account does not exist!  ⚠️",
    });
  }

  await app.DeleteUser(email);
  res.status(200).json({
    message: "✅ User deleted!",
  });
};
