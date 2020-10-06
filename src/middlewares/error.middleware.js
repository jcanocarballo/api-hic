module.exports = (err, req, res, next) => {
  console.log(err)
  const httpStatus = err.status || 500;

  return res.status(httpStatus).send({
      status: httpStatus,
      message: err.message || "Error interno del servicio"
  });
}