const BaseServices = require('../base.services');
const { mapperToClientSide } = require('../dtos/Car.dto');

let _carRepository = null;
class CarServices extends BaseServices {
  constructor({ carReporitory }) {
    _carRepository = carReporitory;
    super(carReporitory);
  }

  async searchByValues(value) {
    const cars = await _carRepository.searchByValues(value);
    return mapperToClientSide(cars);
  }
}

module.exports = CarServices;