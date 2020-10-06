module.exports = (err, req, res, next) => {
  console.log("Error => " + JSON.stringify(err))
  const httpStatus = err.status || 400;

  return res.status(httpStatus).send({
      status: httpStatus,
      message: err.message || "Error interno del servicio"
  });
}