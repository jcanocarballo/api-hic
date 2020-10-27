const fs = require("fs");
const path = require("path");
let _clientService = null;

class ClientController {
    constructor({ ClientService }) {
        _clientService = ClientService;
    }

    async get(req, res) {
        const { clientId } = req.params;
        const client = await _clientService.get(clientId);
        return res.send(client);
    }

    async create(req, res){
      const { body } = req;
      const createdClient = await _clientService.create(body);
      return res.status(201).send(createdClient);
    }

    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const client = await _clientService.getAll(pageSize, pageNum);
        return res.send(client);
    }

    async update(req, res) {
        const { body } = req;
        const { clientId } = req.params;
        const updateClient = await _clientService.update(clientId, body);

        return res.send(updateClient);
    }

    async delete(req, res) {
        const { clientId } = req.params;
        const deleteClient = await _clientService.delete(clientId);
        return res.send(deleteClient);
    }
}

module.exports = ClientController;