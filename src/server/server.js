const express = require('express');

class Server {
  constructor(config, router) {
    this.config = config;
    this.express = express().use(router);
    this.errorhandlers();
  }

  start() {
    return new Promise((resolve) => {
      this.express.listen(this.config.PORT, () => {
        console.log('App running on port', this.config.PORT);
        resolve();
      });
    });
  }

  errorhandlers() {}
}

module.exports = Server;
