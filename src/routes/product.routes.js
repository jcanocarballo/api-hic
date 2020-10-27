const {
  Router
} = require('express');
const {
  AuthMiddleware,
  ParseIntMiddleware
} = require('../middlewares');

const multipart = require('connect-multiparty');
const md_upload = multipart({uploadDir: './uploads/products'})

module.exports = function({
  ProductController
}) {
  const router = Router();

  router.get("/", [ParseIntMiddleware], ProductController.getAll);
  router.get("/:productId", ProductController.get);
  router.post("/", [AuthMiddleware], ProductController.create);
  router.put("/:productId", [AuthMiddleware], ProductController.update);
  router.delete("/:productId", [AuthMiddleware], ProductController.delete);
  router.post("/upload-image-product/:productId", [AuthMiddleware, md_upload], ProductController.uploadImage);
  router.get("/get-image-product/:imageFile", ProductController.getImageFile)

  return router;
}