const connectionService = require('../connectionService');

class Objects {
  constructor(connectionDetails, axios) {
    this.connectionDetails = connectionDetails;
    this.axios = axios;
  }

  async createSchema(params) {
    if (!params.pin) {
      throw Error('createSchema missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('createSchema pin must be a minimum of 4 characters');
    }

    return connectionService(this.connectionDetails, this.axios, 'objects/create/schema', params);
  }

  async getSchema(params) {
    if (!params.name && !params.address) {
      throw Error('getSchema either name or address has to be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'objects/get/schema', params);
  }
}

module.exports = Objects;
