const {
  Router
} = require('express');
const {
  AuthMiddleware,
  ParseIntMiddleware
} = require('../middlewares');

module.exports = function({
  ClientController
}) {
  const router = Router();

  router.get("/", [ParseIntMiddleware], [AuthMiddleware], ClientController.getAll);
  router.get("/:clientId", [AuthMiddleware], ClientController.get);
  router.post("/", [AuthMiddleware], ClientController.create);
  router.put("/:clientId", [AuthMiddleware], ClientController.update);
  router.delete("/:clientId", [AuthMiddleware], ClientController.delete);

  return router;
}