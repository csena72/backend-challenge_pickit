const CarController = require('./car.controller');
const CarRoutes = require('../../../routes/car.routes');

module.exports = (router, { carSerivices }) => {
  return CarRoutes(router, new CarController(carSerivices));
};
