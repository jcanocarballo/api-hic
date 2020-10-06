class BaseService {
  constructor(repository) {
      this.repository = repository;
  }

  async get(id) {
      if (!id) {
          const error = new Error();
          error.status = 400;
          error.message = "El id no ha sido enviado.";
          throw error;
      }
      const currentEntity = await this.repository.get(id);
      if (!currentEntity) {
          const error = new Error();
          error.status = 404;
          error.message = "El item no existe en la BD.";
          throw error;
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
          const error = new Error();
          error.status = 400;
          error.message = "El id no ha sido enviado.";
          throw error;
      }
      return await this.repository.update(id, entity);
  }

  async delete(id) {
      if (!id) {
          const error = new Error();
          error.status = 400;
          error.message = "El id no ha sido enviado.";
          throw error;
      }
      return await this.repository.delete(id);
  }
}

module.exports = BaseService;