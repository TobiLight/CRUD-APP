const Auth = require("../services/auth");

exports.authController = (req, res, next) => {
  const { firstname, lastname, email, country } = req.body;

  if (!firstname || !lastname || !email || !country) {
    return res.status(400).json({});
  }

  try {
    const user = new Auth();
    user.Signup(firstname, lastname, email, country);
    console.log(user);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};
