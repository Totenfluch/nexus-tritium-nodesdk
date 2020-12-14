const connectionService = require('../connectionService');

class Tokens {
  constructor(connectionDetails, axios) {
    this.connectionDetails = connectionDetails;
    this.axios = axios;
  }

  async createItem(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.pin) {
      throw Error('createItem missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('createItem pin must be a minimum of 4 characters');
    }
    if (!params.supply) {
      throw Error('createItem missing parameter supply');
    }
    if (!params.decimals) {
      throw Error('createItem missing parameter decimals');
    }

    return connectionService(this.connectionDetails, this.axios, 'tokens/create/token', params);
  }


  async debitToken(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.pin) {
      throw Error('debitToken missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('debitToken pin must be a minimum of 4 characters');
    }
    if (!params.name && !params.address) {
      throw Error('debitToken either name or address must be specified');
    }
    if (!params.name_to && !params.address_to) {
      throw Error('debitToken either name_to or address_to must be specified');
    }
    if (!params.amount) {
      throw Error('debitToken missing parameter amount');
    }

    return connectionService(this.connectionDetails, this.axios, 'tokens/debit/token', params);
  }

  async creditToken(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.pin) {
      throw Error('creditToken missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('creditToken pin must be a minimum of 4 characters');
    }
    if (!params.txid) {
      throw Error('creditToken missing parameter txid');
    }
    if (!params.name && !params.address) {
      throw Error('creditToken either name or address must be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'tokens/credit/token', params);
  }

  async getToken(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.name && !params.address) {
      throw Error('getToken either name or address must be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'tokens/get/token', params);
  }

  async listTokenAccounts(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.name) {
      throw Error('listTokenAccounts name must be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'tokens/list/token/accounts', params);
  }

  async listTokenTransactions(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.name && !params.address) {
      throw Error('listTokenTransactions either name or address must be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'tokens/list/token/transactions', params);
  }


  async createAccount(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.pin) {
      throw Error('createAccount missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('createAccount pin must be a minimum of 4 characters');
    }
    if (!params.token_name && !params.token) {
      throw Error('createAccount either token_name or token must be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'tokens/create/account', params);
  }

  async debitAccount(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
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
    if (!params.amount) {
      throw Error('debitAccount missing parameter amount');
    }

    return connectionService(this.connectionDetails, this.axios, 'tokens/debit/account', params);
  }

  async creditAccount(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
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

    return connectionService(this.connectionDetails, this.axios, 'tokens/credit/account', params);
  }

  async getAccount(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.name && !params.address) {
      throw Error('getAccount either name or address must be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'tokens/get/account', params);
  }

  async listAccountTransactions(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.name && !params.address) {
      throw Error('listAccountTransactions either name or address must be specified');
    }

    return connectionService(this.connectionDetails, this.axios, 'tokens/list/account/transactions', params);
  }
}

module.exports = Tokens;
