const CarRepository = require('./Car/car.repository');

module.exports = class RepositoriesProvider {
    constructor(db) {
        this.carReporitory = new CarRepository(db)
    }
}
