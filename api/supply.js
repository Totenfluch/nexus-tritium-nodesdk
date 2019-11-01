const connectionService = require('../connectionService');

class Supply {
  constructor(connectionDetails, axios) {
    this.connectionDetails = connectionDetails;
    this.axios = axios;
  }

  async createItem(params) {
    if (!params.pin) {
      throw Error('createItem missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('createItem pin must be a minimum of 4 characters');
    }
    if (!params.data) {
      throw Error('createItem missing parameter data');
    }

    return connectionService(this.connectionDetails, this.axios, 'supply/create/item', params);
  }

  async getItem(params) {
    if (!params.name && !params.address) {
      throw Error('getItem either name or address has to be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'supply/get/item', params);
  }

  async updateItem(params) {
    if (!params.pin) {
      throw Error('updateItem missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('updateItem pin must be a minimum of 4 characters');
    }
    if (!params.data) {
      throw Error('updateItem missing parameter data');
    }
    if (!params.name && !params.address) {
      throw Error('updateItem either name or address has to be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'supply/update/item', params);
  }

  async transferItem(params) {
    if (!params.pin) {
      throw Error('transferItem missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('transferItem pin must be a minimum of 4 characters');
    }
    if (!params.name && !params.address) {
      throw Error('transferItem either name or address has to be specified');
    }
    if (!params.username && !params.destination) {
      throw Error('transferItem either username or destination has to be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'supply/transfer/item', params);
  }

  async claimItem(params) {
    if (!params.pin) {
      throw Error('claimItem missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('claimItem pin must be a minimum of 4 characters');
    }
    if (!params.txid) {
      throw Error('claimItem missing parameter txid');
    }

    return connectionService(this.connectionDetails, this.axios, 'supply/claim/item', params);
  }

  async listItemHistory(params) {
    if (!params.name && !params.address) {
      throw Error('listItemHistory either name or address has to be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'supply/list/item/history', params);
  }
}

module.exports = Supply;
