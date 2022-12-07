module.exports = function errorHandler(err, req, res, next) {
  res.status(404).json({
    message: "Not Found",
  });
};
