const fs = require("fs");
const path = require("path");
let _productService = null;

class ProductController {
    constructor({ ProductService }) {
        _productService = ProductService;
    }

    async get(req, res) {
        const { productId } = req.params;
        const product = await _productService.get(productId);
        return res.send(product);
    }

    async create(req, res){
      const { body } = req;
      const createdProduct = await _productService.create(body);
      return res.status(201).send(createdProduct);
    }

    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const products = await _productService.getAll(pageSize, pageNum);
        return res.send(products);
    }

    async update(req, res) {
        const { body } = req;
        const { productId } = req.params;
        const updateProduct = await _productService.update(productId, body);

        return res.send(updateProduct);
    }

    async delete(req, res) {
        const { productId } = req.params;
        const deleteProduct = await _productService.delete(productId);
        return res.send(deleteProduct);
    }

    async uploadImage(req, res){
      const { productId } = req.params;   
      const uploadImage = await _productService.uploadImage(productId, req.files);  
      return res.status(200).send(uploadImage);      
    }

    async getImageFile(req, res){
      let imageFile = req.params.imageFile;
      let pathFile = `./uploads/products/${imageFile}`

      fs.exists(pathFile, (exist) =>{
        if(!exist){
          return res.status(404).send({message: "La imagen no existe."});
        }
        return res.status(200).sendFile(path.resolve(pathFile));
      })
    }
}

module.exports = ProductController;