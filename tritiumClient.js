const axios = require('axios');
const Assets = require('./api/assets');
const Finance = require('./api/finance');
const Ledger = require('./api/ledger');
const Names = require('./api/names');
const Objects = require('./api/objects');
const Overview = require('./api/overview');
const Supply = require('./api/supply');
const System = require('./api/system');
const Tokens = require('./api/tokens');
const Users = require('./api/users');


class TritiumClient {
  constructor(connectionDetails) {
    this.assets = new Assets(connectionDetails, axios);
    this.finance = new Finance(connectionDetails, axios);
    this.ledger = new Ledger(connectionDetails, axios);
    this.names = new Names(connectionDetails, axios);
    this.objects = new Objects(connectionDetails, axios);
    this.overview = new Overview(connectionDetails, axios);
    this.supply = new Supply(connectionDetails, axios);
    this.system = new System(connectionDetails, axios);
    this.tokens = new Tokens(connectionDetails, axios);
    this.users = new Users(connectionDetails, axios);
  }
}

module.exports = TritiumClient;
