const BaseRepository = require('./base.repository');

let _venta = null;

class VentaRepository extends BaseRepository {
    constructor({ Venta }) {
        super(Venta);
        _venta = Venta;
    }
    
    async getVentaByName(name) {
      return await _venta.findOne({ name });
    }
}

module.exports = VentaRepository;