const { mapperToClientSide } = require('../services/dtos/Car.dto');

let _modelRepository = null;
class BaseServices {
  constructor(modelRepository) {
    _modelRepository = modelRepository;
  }

  async getAll(pageSize, pageNum) {
    const items = await _modelRepository.getAll(pageSize, pageNum);
    const totalItems = await _modelRepository.getCount();
    return { items: mapperToClientSide(items), totalItems };
  }

  async get(id) {
    const item = await _modelRepository.get(id);
    return mapperToClientSide([item], false);
  }

  async create(entity) {
    const itemCreated = await _modelRepository.create(entity);
    return mapperToClientSide([itemCreated]);
  }

  async update(id, entity) {   
    const itemUpdated = await _modelRepository.update(id, entity);
    return mapperToClientSide([itemUpdated]);
  }

  async delete(id) {
    return await _modelRepository.delete(id);
  }
}

module.exports = BaseServices;
