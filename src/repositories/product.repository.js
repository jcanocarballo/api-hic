const BaseRepository = require('./base.repository');

let _product = null;

class ProductRepository extends BaseRepository {
    constructor({ Product }) {
        super(Product);
        _product = _product;
    }

    async getProductByName(name) {
        return await _product.findOne({ name });
    }
}

module.exports = ProductRepository;