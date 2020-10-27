const BaseService = require('./base.service');
const { ErrorHelper } = require('../helpers');

let _categoryRepository = null;

class CategoryService extends BaseService {
    constructor({ CategoryRepository }) {
        super(CategoryRepository);
        _categoryRepository = CategoryRepository;
    }

    async getCategoryByName(name) {
      return await _categoryRepository.getCategoryByName(name);
    }

    async create(category){
      const { codigo } = category;
      const categoryExist = await this.getCategoryByCodigo(codigo)

      if (categoryExist) {
        ErrorHelper.error(400, "La categoria ya existe");
      }        
      return await _categoryRepository.create(category);
    }
}

module.exports = CategoryService;