const CarSerivices = require('./Car/car.services');

module.exports = class ServicesProvider {
    constructor(repositories) {
        this.carSerivices = new CarSerivices(repositories)
    }
}
