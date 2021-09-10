const car = require('./car');

module.exports = class Controllers {
    constructor(router, services) {
        this.router = router;
        this.services = services
        //console.log(this.services);
        this.car = car(this.router, this.services);
    }
}
