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

let connection = '';

class TritiumClient {
  constructor(connectionOptions) {
    connection = `http://${connectionOptions.host}:${connectionOptions.port}`;
    this.assets = new Assets(connection, axios);
    this.finance = new Finance(connection, axios);
    this.ledger = new Ledger(connection, axios);
    this.names = new Names(connection, axios);
    this.objects = new Objects(connection, axios);
    this.overview = new Overview(connection, axios);
    this.supply = new Supply(connection, axios);
    this.system = new System(connection, axios);
    this.tokens = new Tokens(connection, axios);
    this.users = new Users(connection, axios);
  }
}

module.exports = TritiumClient;
