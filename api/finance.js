const connectionService = require('../connectionService');

class Finance {
  constructor(connectionDetails, axios) {
    this.connectionDetails = connectionDetails;
    this.axios = axios;
  }

  async createAccount(params) {
    if (params.pin.length < 4) {
      throw Error('createUser pin must be a minimum of 4 characters');
    }

    return connectionService(this.connectionDetails, this.axios, 'finance/create/account', params);
  }
}

module.exports = Finance;
