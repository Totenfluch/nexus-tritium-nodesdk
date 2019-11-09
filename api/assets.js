const connectionService = require('../connectionService');

class Assets {
  constructor(connectionDetails, axios) {
    this.connectionDetails = connectionDetails;
    this.axios = axios;
  }

  async createAsset(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (params.pin.length < 4) {
      throw Error('createAsset pin must be a minimum of 4 characters');
    }

    return connectionService(this.connectionDetails, this.axios, 'assets/create/asset', params);
  }

  async getAsset(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (params.pin.length < 4) {
      throw Error('getAsset pin must be a minimum of 4 characters');
    }

    return connectionService(this.connectionDetails, this.axios, 'assets/get/asset', params);
  }

  async updateAsset(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.pin) {
      throw Error('updateAsset missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('updateAsset pin must be a minimum of 4 characters');
    }
    if (!params.name) {
      throw Error('updateAsset missing parameter name');
    }

    return connectionService(this.connectionDetails, this.axios, 'assets/update/asset', params);
  }

  async transferAsset(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.pin) {
      throw Error('transferAsset missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('transferAsset pin must be a minimum of 4 characters');
    }
    if (!params.name && !params.address) {
      throw Error('transferAsset either name or address must be specified');
    }
    if (!params.username && !params.destination) {
      throw Error('transferAsset either username or address must be destination');
    }

    return connectionService(this.connectionDetails, this.axios, 'assets/transfer/asset', params);
  }

  async claimAsset(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.pin) {
      throw Error('claimAsset missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('claimAsset pin must be a minimum of 4 characters');
    }
    if (!params.txid) {
      throw Error('claimAsset missing parameter txid');
    }

    return connectionService(this.connectionDetails, this.axios, 'assets/claim/asset', params);
  }

  async listAssetHistory(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.name && !params.address) {
      throw Error('listAssetHistory either name or address must be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'assets/list/asset/history', params);
  }

  async tokenizeAsset(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.pin) {
      throw Error('tokenizeAsset missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('tokenizeAsset pin must be a minimum of 4 characters');
    }
    if (!params.name && !params.address) {
      throw Error('tokenizeAsset either name or address must be specified');
    }
    if (!params.token_name && !params.token) {
      throw Error('tokenizeAsset either token_name or token must be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'assets/list/asset/history', params);
  }
}

module.exports = Assets;
