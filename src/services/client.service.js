const BaseService = require('./base.service');
const { ErrorHelper } = require('../helpers');

let _clientRepository = null;

class ClientService extends BaseService {
    constructor({ ClientRepository }) {
        super(ClientRepository);
        _clientRepository = ClientRepository;
    }

    async getClientByName(name) {
      return await _clientRepository.getClientByName(name);
    }

    async create(client){
      const { codigo } = client;
      const clientExist = await this.getClientByCodigo(codigo)

      if (clientExist) {
        ErrorHelper.error(400, "La categoria ya existe");
      }        
      return await _clientRepository.create(client);
    }
}

module.exports = ClientService;