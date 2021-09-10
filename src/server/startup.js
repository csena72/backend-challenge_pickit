class Startup {
    constructor({ server }) {
      this.server = server;
    }
  
    async start() {
      await this.server.start();
    }
  }
  
  module.exports = Startup;
  