const BaseRepository = require('./base.repository');

let _category = null;

class CategoryRepository extends BaseRepository {
    constructor({ Category }) {
        super(Category);
        _category = Category;
    }
    
    async getCategoryByName(name) {
      return await _category.findOne({ name });
    }
}

module.exports = CategoryRepository;