const connectionService = require('../connectionService');

class Users {
  constructor(connectionDetails, axios) {
    this.connectionDetails = connectionDetails;
    this.axios = axios;
  }

  createUser(params) {
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

  loginUser(params) {
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

  logoutUser(params) {
    console.log('logoutUser');
  }

  unlockUser(params) {
    console.log('unlockUser');
  }

  lockUser() {
    console.log('lockUser');
  }

  listAccounts() {
    console.log('listAccounts');
  }

  listAssets() {
    console.log('listAssets');
  }

  listItems() {
    console.log('listItems');
  }

  listNames() {
    console.log('listNames');
  }

  listNamespaces() {
    console.log('listNamespaces');
  }

  listNotifications() {
    console.log('listNotifications');
  }

  listTokens() {
    console.log('listTokens');
  }

  listTransactions() {
    console.log('listTransactions');
  }
}

module.exports = Users;
