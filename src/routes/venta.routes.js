const {
  Router
} = require('express');
const {
  AuthMiddleware,
  ParseIntMiddleware
} = require('../middlewares');

module.exports = function({
  VentaController
}) {
  const router = Router();

  router.get("/", [ParseIntMiddleware], [AuthMiddleware], VentaController.getAll);
  router.get("/:ventaId", [AuthMiddleware], VentaController.get);
  router.post("/", [AuthMiddleware], VentaController.create);
  router.put("/:ventaId", [AuthMiddleware], VentaController.update);

  return router;
}