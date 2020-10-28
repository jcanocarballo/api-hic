const {
  Router
} = require('express');
const {
  AuthMiddleware,
  ParseIntMiddleware
} = require('../middlewares');

module.exports = function({
  CategoryController
}) {
  const router = Router();

  router.get("/", [ParseIntMiddleware], [AuthMiddleware], CategoryController.getAll);
  router.get("/:categoryId", [AuthMiddleware], CategoryController.get);
  router.post("/", [AuthMiddleware], CategoryController.create);
  router.put("/:categoryId", [AuthMiddleware], CategoryController.update);
  router.delete("/:categoryId", [AuthMiddleware], CategoryController.delete);

  return router;
}