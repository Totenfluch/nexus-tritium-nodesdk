const connectionService = require('../connectionService');

class System {
  constructor(connection, axios) {
    this.connection = connection;
    this.axios = axios;
  }

  async getInfo() {
    const params = {};
    return connectionService(this.connection, this.axios, 'system/get/info/', params);
  }
}

module.exports = System;
