const {
  Router
} = require('express');
const {
  AuthMiddleware,
  ParseIntMiddleware
} = require('../middlewares');

const multipart = require('connect-multiparty');
const md_upload = multipart({uploadDir: './uploads/users'})

module.exports = function({
  UserController
}) {
  const router = Router();

  router.get("/", [ParseIntMiddleware, AuthMiddleware], UserController.getAll);
  router.get("/:userId", [AuthMiddleware], UserController.get);
  router.put("/:userId", [AuthMiddleware], UserController.update);
  router.delete("/:userId", [AuthMiddleware], UserController.delete);
  router.post("/upload-image/:userId", [AuthMiddleware, md_upload], UserController.uploadImage);
  router.get("/get-image-file/:imageFile", UserController.getImageFile)

  return router;
}