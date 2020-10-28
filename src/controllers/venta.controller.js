const fs = require("fs");
const path = require("path");
let _ventaService = null;

class VentaController {
    constructor({ VentaService }) {
        _ventaService = VentaService;
    }

    async get(req, res) {
        const { ventaId } = req.params;
        const venta = await _ventaService.get(ventaId);
        return res.send(venta);
    }

    async create(req, res){
      const { body } = req;
      const createdVenta = await _ventaService.create(body);
      return res.status(201).send(createdVenta);
    }

    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const venta = await _ventaService.getAll(pageSize, pageNum);
        return res.send(venta);
    }

    async update(req, res) {
        const { body } = req;
        const { ventaId } = req.params;
        const updateVenta = await _ventaService.update(ventaId, body);

        return res.send(updateVenta);
    }
}

module.exports = VentaController;