const BaseService = require('./base.service');
const { ErrorHelper } = require('../helpers');

let _ventaRepository = null;

class VentaService extends BaseService {
    constructor({ VentaRepository }) {
        super(VentaRepository);
        _ventaRepository = VentaRepository;
    }
}

module.exports = VentaService;