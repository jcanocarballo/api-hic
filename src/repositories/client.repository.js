const BaseRepository = require('./base.repository');

let _client = null;

class ClientRepository extends BaseRepository {
    constructor({ Client }) {
        super(Client);
        _client = Client;
    }
    
    async getClientByName(name) {
      return await _client.findOne({ name });
    }
}

module.exports = ClientRepository;