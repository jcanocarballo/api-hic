const BaseService = require('./base.service');
const { ErrorHelper } = require('../helpers');

let _productRepository = null;

class ProductService extends BaseService {
    constructor({ ProductRepository }) {
        super(ProductRepository);
        _productRepository = ProductRepository;
    }

    async getProductByCodigo(codigo) {
        return await _productRepository.getProductByCodigo(codigo);
    }

    async getProductByName(name) {
      return await _productRepository.getProductByName(name);
    }

    async create(product){
      const { codigo } = product;
      const productExist = await this.getProductByCodigo(codigo)

      if (productExist) {
        ErrorHelper.error(400, "El codigo del producto ya existe");
      }        
      return await _productRepository.create(product);
    }

    async uploadImage(id, files){
      if (!id) {
        ErrorHelper.error(400, "El id no ha sido enviado.");
      }
      if(!files.image){
        ErrorHelper.error(404, "No se ha subido ningun archivo.");        
      }
      let file_path = files.image.path;
      let file_split = file_path.split('/');
      let file_name = file_split[2];
      let ext_split = file_name.split('.');
      let file_ext = ext_split[1];

      if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){
        return await this.update(id, {image: file_name})        
      }else{
        ErrorHelper.error(404, "Extencion no valida.");
      }     
    }
}

module.exports = ProductService;