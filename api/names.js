const connectionService = require('../connectionService');

class Names {
  constructor(connectionDetails, axios) {
    this.connectionDetails = connectionDetails;
    this.axios = axios;
  }

  async createNamespace(params) {
    if (!params.pin) {
      throw Error('createNamespace missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('createNamespace pin must be a minimum of 4 characters');
    }
    if (!params.name) {
      throw Error('createNamespace missing parameter name');
    }

    return connectionService(this.connectionDetails, this.axios, 'names/create/namespace', params);
  }

  async getNamespace(params) {
    if (!params.name) {
      throw Error('getNamespace missing parameter name');
    }

    return connectionService(this.connectionDetails, this.axios, 'names/get/namespace', params);
  }

  async transferNamespace(params) {
    if (!params.pin) {
      throw Error('transferNamespace missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('transferNamespace pin must be a minimum of 4 characters');
    }
    if (!params.name && !params.address) {
      throw Error('transferNamespace either name or address has to be specified');
    }
    if (!params.username && !params.destination) {
      throw Error('transferNamespace either username or destination has to be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'names/transfer/namespace', params);
  }

  async claimNamespace(params) {
    if (!params.pin) {
      throw Error('claimNamespace missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('claimNamespace pin must be a minimum of 4 characters');
    }
    if (!params.txid) {
      throw Error('claimNamespace missing parameter txid');
    }

    return connectionService(this.connectionDetails, this.axios, 'names/claim/namespace', params);
  }

  async listNamespaceHistory(params) {
    if (!params.name && !params.address) {
      throw Error('listNamespaceHistory either name or address has to be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'names/list/namespace/history', params);
  }

  async createName(params) {
    if (!params.pin) {
      throw Error('createName missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('createName pin must be a minimum of 4 characters');
    }
    if (!params.name) {
      throw Error('createName missing parameter name');
    }
    if (params.name.indexOf(':') === 0) {
      throw Error('createName parameter name can not start with ":"');
    }
    if (!params.register_address) {
      throw Error('createName missing parameter register_address');
    }

    return connectionService(this.connectionDetails, this.axios, 'names/create/name', params);
  }

  async getName(params) {
    if (!params.name && !params.register_address) {
      throw Error('getName either name or register_address has to be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'names/get/name', params);
  }

  async updateName(params) {
    if (!params.pin) {
      throw Error('updateName missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('updateName pin must be a minimum of 4 characters');
    }
    if (!params.name && !params.address) {
      throw Error('updateName either name or address has to be specified');
    }
    if (!params.register_address) {
      throw Error('updateName missing parameter register_address');
    }

    return connectionService(this.connectionDetails, this.axios, 'names/update/name', params);
  }

  async transferName(params) {
    if (!params.pin) {
      throw Error('transferName missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('transferName pin must be a minimum of 4 characters');
    }
    if (!params.name && !params.address) {
      throw Error('transferName either name or address has to be specified');
    }
    if (!params.username && !params.destination) {
      throw Error('transferName either username or destination has to be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'names/transfer/name', params);
  }

  async claimName(params) {
    if (!params.pin) {
      throw Error('claimName missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('claimName pin must be a minimum of 4 characters');
    }
    if (!params.txid) {
      throw Error('claimName missing parameter txid');
    }

    return connectionService(this.connectionDetails, this.axios, 'names/transfer/name', params);
  }

  async listNameHistory(params) {
    if (!params.name && !params.address) {
      throw Error('listNameHistory either name or address has to be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'names/list/name/history', params);
  }
}

module.exports = Names;
