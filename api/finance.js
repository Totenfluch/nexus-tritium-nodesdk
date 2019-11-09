const connectionService = require('../connectionService');

class Finance {
  constructor(connectionDetails, axios) {
    this.connectionDetails = connectionDetails;
    this.axios = axios;
  }

  async createAccount(params) {
    if (!params.pin) {
      throw Error('createAccount missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('createAccount pin must be a minimum of 4 characters');
    }

    return connectionService(this.connectionDetails, this.axios, 'finance/create/account', params);
  }

  async debitAccount(params) {
    if (!params.pin) {
      throw Error('debitAccount missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('debitAccount pin must be a minimum of 4 characters');
    }
    if (!params.name && !params.address) {
      throw Error('debitAccount either name or address must be specified');
    }
    if (!params.name_to && !params.address_to) {
      throw Error('debitAccount either name_to or address_to must be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'finance/debit/account', params);
  }

  async creditAccount(params) {
    if (!params.pin) {
      throw Error('creditAccount missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('creditAccount pin must be a minimum of 4 characters');
    }
    if (!params.txid) {
      throw Error('creditAccount missing parameter txid');
    }
    if (!params.name && !params.address) {
      throw Error('creditAccount either name or address must be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'finance/credit/account', params);
  }

  async getAccount(params) {
    if (!params.name && !params.address) {
      throw Error('getAccount either name or address must be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'finance/get/account', params);
  }

  async listAccounts(params) {
    return connectionService(this.connectionDetails, this.axios, 'finance/list/accounts', params);
  }

  async listAccountTransactions(params) {
    if (!params.name && !params.address) {
      throw Error('listAccountTransactions either name or address must be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'finance/list/account/transactions', params);
  }

  async getStakeinfo(params) {
    return connectionService(this.connectionDetails, this.axios, 'finance/get/stakeinfo', params);
  }

  async setStake(params) {
    if (!params.pin) {
      throw Error('setStake missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('setStake pin must be a minimum of 4 characters');
    }
    if (!params.amount) {
      throw Error('setStake missing parameter amount');
    }

    return connectionService(this.connectionDetails, this.axios, 'finance/get/stake', params);
  }

  async migrateStake(params) {
    if (!params.pin) {
      throw Error('migrateStake missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('migrateStake pin must be a minimum of 4 characters');
    }

    return connectionService(this.connectionDetails, this.axios, 'finance/migrate/stake', params);
  }

  async migrateAccounts(params) {
    if (!params.pin) {
      throw Error('migrateStake missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('migrateStake pin must be a minimum of 4 characters');
    }

    return connectionService(this.connectionDetails, this.axios, 'finance/migrate/accounts', params);
  }

  async getBalances(params) {
    return connectionService(this.connectionDetails, this.axios, 'finance/get/balances', params);
  }

  async listTrustAccounts(params) {
    return connectionService(this.connectionDetails, this.axios, 'finance/list/trustaccounts', params);
  }
}

module.exports = Finance;
