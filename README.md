# nexus-tritium-nodesdk
Wrapper for the Nexus-Tritium API
Official Documentation can be found here: https://github.com/Nexusoft/LLL-TAO/blob/tritium-dev/docs

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

For the full documentation visit: https://github.com/Nexusoft/LLL-TAO/tree/merging/docs/API
