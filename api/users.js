class Users {
  constructor(connection, axios) {
    this.connection = connection;
    this.axios = axios;
  }

  createUser(params) {
    console.log('createUser', this.connection);
  }

  loginUser(params) {
    console.log('loginUser');
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
