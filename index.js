const tritium = require('./main');

const tritiumClient = tritium.createClient({
  host: '104.248.38.13',
  port: '8080',
  apiUsername: 'CoinKit111',
  apiPassword: 'ItsMeMario111',
});

async function test() {
  console.log(await tritiumClient.system.getInfo());
  // console.log(await tritiumClient.users.createUser({ username: 'coinkit1', password: 'coinkit1', pin: 'coinkit2' }));
  console.log(await tritiumClient.users.loginUser({ username: 'coinkit1', password: 'coinkit1', pin: 'coinkit2' }));
  //console.log(await tritiumClient.finance.createAccount({ name: 'Totenfluch', pin: 'coinkit2' }));
}

test();
