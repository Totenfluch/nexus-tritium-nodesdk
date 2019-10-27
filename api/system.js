const connectionService = require('../connectionService');

class System {
  constructor(connectionDetails, axios) {
    this.connectionDetails = connectionDetails;
    this.axios = axios;
  }

  async getInfo() {
    const params = {};
    return connectionService(this.connectionDetails, this.axios, 'system/get/info', params);
  }

  async listPeers() {
    const params = {};
    return connectionService(this.connectionDetails, this.axios, 'system/list/peers', params);
  }

  async listListpEids() {
    const params = {};
    return connectionService(this.connectionDetails, this.axios, 'system/list/lisp-eids', params);
  }
}

module.exports = System;
