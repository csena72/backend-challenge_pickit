const BaseRepositories = require('../base.repository');
let _db = null;

class CarRepositories extends BaseRepositories {
  constructor(db) {
    super(db, 'Car');
    _db = db;
  }

  async filterByParam(filter, valueRegex) {
    const car = await _db['Car'].find({ [filter]: valueRegex });
    return car;
  }

  async getCount() {
    return await _db['Car'].countDocuments()
  }

  async searchByValues(value) {
    const regexValue = new RegExp(value);
    const cars = await _db['Car'].find({
      $or: [
        { brand: regexValue },
        { model: regexValue },
        { year: regexValue },
        { patent: regexValue },
        { color: regexValue }
      ],
    });
    return cars;
  }
}

module.exports = CarRepositories;
