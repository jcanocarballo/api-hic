const { ErrorHelper } = require('../helpers')

class BaseService {
  constructor(repository) {
      this.repository = repository;
  }

  async get(id) {
      if (!id) {
        ErrorHelper.error(400, "El id no ha sido enviado.");
      }
      const currentEntity = await this.repository.get(id);
      if (!currentEntity) {
        ErrorHelper.error(404, "El item no existe en la BD.");
      }
      return currentEntity;
  }

  async getAll(pageSize, pageNumber) {
      return await this.repository.getAll(pageSize, pageNumber);
  }

  async create(entity) {
      return await this.repository.create(entity);
  }

  async update(id, entity) {
      if (!id) {
        ErrorHelper.error(400, "El id no ha sido enviado.");
      }
      return await this.repository.update(id, entity);
  }

  async delete(id) {
      if (!id) {
        ErrorHelper.error(400, "El id no ha sido enviado.");
      }
      return await this.repository.delete(id);
  }
}

module.exports = BaseService;