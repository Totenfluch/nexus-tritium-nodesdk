# nexus-tritium-nodesdk
Wrapper for the Nexus-Tritium API
Official Documentation can be found here: https://github.com/Nexusoft/LLL-TAO/tree/merging/docs/API

## How to use
### Create the Connection
```
const tritium = require('nexus-tritium-nodesdk');
const tritiumClient = tritium.createClient({
  host: '127.0.0.1',
  port: '8080', // 8080 is tritium testnet
  apiUsername: 'apiusername',
  apiPassword: 'apipassword',
});
```

### Setup of this Wrapper
The official API is divided into
- Assets
- Finance
- Ledger
- Names
- Objects
- Supply
- System
- Tokens
- Users

You can access all those APIs individually by using them as property
```
const assets = tritiumClient.assets;
const finance = tritiumClient.finance;
const ledger = tritiumClient.ledger;
const names = tritiumClient.names;
const objects = tritiumClient.objects;
const supply = tritiumClient.supply;
const system = tritiumClient.system;
const tokens = tritiumClient.tokens;
const users = tritiumClient.users;
```

After this you can use the single functions:
```
const asset = await assets.getAsset({
  name: 'assetName',
});
```

The format is camelCase for every function listed in the official documentation.
For example:
```
/assets/get/asset -> assets.getAsset({ ... })
/assets/create/asset -> assets.createAsset({ ... })
/finance/create/account -> finance.createAccount({ ... })
/finance/debit/account -> finance.debitAccount({ ... })
/supply/create/item -> supply.createItem({ ... })
```


### Example Commands
```
async function test() {
    //console.log(await tritiumClient.users.createUser({ username: 'username', password: 'password', pin: 'pin' }));
    console.log(await tritiumClient.users.loginUser({ username: 'username', password: 'password', pin: 'pin' }));
    console.log(await tritiumClient.system.getInfo());
    console.log(await tritiumClient.finance.getBalances());
    console.log(await tritiumClient.finance.listAccounts());
    for (let i = 0; i < 10; i += 1) {
      console.log(await tritiumClient.finance.createAccount({ name: `test-account-${i}`, pin: 'pin' }));
    }
    console.log(await tritiumClient.finance.listAccounts());
}
```
