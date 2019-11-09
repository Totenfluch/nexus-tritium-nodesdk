const connectionService = require('../connectionService');

class Ledger {
  constructor(connectionDetails, axios) {
    this.connectionDetails = connectionDetails;
    this.axios = axios;
  }

  async getBlockhash(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.height) {
      throw Error('getBlockhash missing parameter height');
    }

    return connectionService(this.connectionDetails, this.axios, 'ledger/get/blockhash', params);
  }

  async getBlock(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.hash) {
      throw Error('getBlock missing parameter hash');
    }
    if (!params.height) {
      throw Error('getBlock missing parameter height');
    }

    return connectionService(this.connectionDetails, this.axios, 'ledger/get/block', params);
  }

  async listBlocks(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.hash) {
      throw Error('listBlocks missing parameter hash');
    }
    if (!params.height) {
      throw Error('listBlocks missing parameter height');
    }

    return connectionService(this.connectionDetails, this.axios, 'ledger/list/blocks', params);
  }

  async getTransaction(params) {
    if (params) {
      if (params.format) {
        if (params.hash && params.format === 'raw') {
          throw Error('getTransaction parameter hash is ignored because of parameter format set to raw');
        }
      }
    }

    return connectionService(this.connectionDetails, this.axios, 'ledger/get/transaction', params);
  }

  async submitTransaction(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.data) {
      throw Error('submitTransaction missing parameter data');
    }

    return connectionService(this.connectionDetails, this.axios, 'ledger/submit/transaction', params);
  }

  async voidTransaction(params) {
    if (!params) {
      throw Error('You did not specify any parameters but this call needs some. Check the API Page and retry');
    }
    if (!params.txid) {
      throw Error('voidTransaction missing parameter txid');
    }
    if (!params.pin) {
      throw Error('voidTransaction missing parameter pin');
    }
    if (params.pin.length < 4) {
      throw Error('voidTransaction pin must be a minimum of 4 characters');
    }

    return connectionService(this.connectionDetails, this.axios, 'ledger/void/transaction', params);
  }

  async getMininginfo() {
    const params = {};
    return connectionService(this.connectionDetails, this.axios, 'ledger/get/mininginfo', params);
  }
}

module.exports = Ledger;
