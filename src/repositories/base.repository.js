let _db = null;
let _entity = null;

class BaseRepositories {
  constructor(db, entity) {
    _db = db;
    _entity = entity;
  }

  async getAll(pageSize = 10, pageNum = 1) {
    const skips = pageSize * (pageNum - 1);
    const items = await _db[_entity].find().skip(skips).limit(pageSize);
    return items;
  }

  async get(id) {
    const items = await _db[_entity].findById(id);
    console.log(items);
    return items;
  }

  async create(entity) {    
    const createdItem = _db[_entity].create(entity);
    return createdItem;
  }

  async update(id, entity) {
    const itemUpdated = await _db[_entity].findByIdAndUpdate(id, entity, {
      new: true,
    });
    return itemUpdated;
  }

  async delete(id) {
    await _db[_entity].findByIdAndDelete(id);
    return true;
  }
}

module.exports = BaseRepositories;
