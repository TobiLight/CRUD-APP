exports.homepage = (req, res, next) => {
  res.status(200).json({
    message: "Welcome to my basic CRUD APP",
  });
};
