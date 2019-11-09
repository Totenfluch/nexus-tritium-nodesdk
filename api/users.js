const connectionService = require('../connectionService');

class Users {
  constructor(connectionDetails, axios) {
    this.connectionDetails = connectionDetails;
    this.axios = axios;
  }

  async createUser(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.username || !params.password || !params.pin) {
      throw Error('createUser must contain username, password, pin');
    }
    if (params.username.length < 3) {
      throw Error('createUser username must be a minimum of 3 characters');
    }
    if (params.password.length < 8) {
      throw Error('createUser password must be a minimum of 8 characters');
    }
    if (params.pin.length < 4) {
      throw Error('createUser pin must be a minimum of 4 characters');
    }

    return connectionService(this.connectionDetails, this.axios, 'users/create/user', params);
  }

  async loginUser(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.username || !params.password || !params.pin) {
      throw Error('createUser must contain username, password, pin');
    }
    if (params.username.length < 3) {
      throw Error('createUser username must be a minimum of 3 characters');
    }
    if (params.password.length < 8) {
      throw Error('createUser password must be a minimum of 8 characters');
    }
    if (params.pin.length < 4) {
      throw Error('createUser pin must be a minimum of 4 characters');
    }

    return connectionService(this.connectionDetails, this.axios, 'users/login/user', params);
  }

  async logoutUser(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.session) {
      throw Error('logoutUser missing parameter session');
    }

    return connectionService(this.connectionDetails, this.axios, 'users/logout/user', params);
  }

  async unlockUser(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.pin) {
      throw Error('unlockUser missing parameter pin');
    }
    if (!params.mining) {
      throw Error('unlockUser missing parameter mining');
    }
    if (!params.notifications) {
      throw Error('unlockUser missing parameter notifications');
    }
    if (!params.staking) {
      throw Error('unlockUser missing parameter staking');
    }
    if (!params.transactions) {
      throw Error('unlockUser missing parameter transactions');
    }

    return connectionService(this.connectionDetails, this.axios, 'users/unlock/user', params);
  }

  async lockUser(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.mining) {
      throw Error('lockUser missing parameter mining');
    }
    if (!params.notifications) {
      throw Error('lockUser missing parameter notifications');
    }
    if (!params.staking) {
      throw Error('lockUser missing parameter staking');
    }
    if (!params.transactions) {
      throw Error('lockUser missing parameter transactions');
    }

    return connectionService(this.connectionDetails, this.axios, 'users/lock/user', params);
  }

  async getStatus() {
    const params = {};
    return connectionService(this.connectionDetails, this.axios, 'users/get/status', params);
  }

  listAssets(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.genesis) {
      throw Error('listAssets missing parameter genesis');
    }
    if (!params.username) {
      throw Error('listAssets missing parameter username');
    }

    return connectionService(this.connectionDetails, this.axios, 'users/list/assets', params);
  }

  async listAccounts(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.genesis) {
      throw Error('listAccounts missing parameter genesis');
    }
    if (!params.username) {
      throw Error('listAccounts missing parameter username');
    }

    return connectionService(this.connectionDetails, this.axios, 'users/list/accounts', params);
  }

  async listItems(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.genesis) {
      throw Error('listItems missing parameter genesis');
    }
    if (!params.username) {
      throw Error('listItems missing parameter username');
    }

    return connectionService(this.connectionDetails, this.axios, 'users/list/items', params);
  }

  async listNames(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.session) {
      throw Error('listNames missing parameter genesis');
    }

    return connectionService(this.connectionDetails, this.axios, 'users/list/names', params);
  }

  async listNamespaces(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.session) {
      throw Error('listNamespaces missing parameter genesis');
    }
    if (!params.username) {
      throw Error('listNamespaces missing parameter username');
    }

    return connectionService(this.connectionDetails, this.axios, 'users/list/namespaces', params);
  }

  async listNotifications(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.genesis) {
      throw Error('listNotifications missing parameter genesis');
    }
    if (!params.username) {
      throw Error('listNotifications missing parameter username');
    }

    return connectionService(this.connectionDetails, this.axios, 'users/list/notifications', params);
  }

  async listTokens(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.genesis) {
      throw Error('listTokens missing parameter genesis');
    }
    if (!params.username) {
      throw Error('listTokens missing parameter username');
    }

    return connectionService(this.connectionDetails, this.axios, 'users/list/tokens', params);
  }

  async listTransactions(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.genesis) {
      throw Error('listTransactions missing parameter genesis');
    }
    if (!params.username) {
      throw Error('listTransactions missing parameter username');
    }

    return connectionService(this.connectionDetails, this.axios, 'users/list/transactions', params);
  }
}

module.exports = Users;
