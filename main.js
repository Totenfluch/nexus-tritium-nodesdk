const TritiumClient = require('./tritiumClient');

/*


*/
function createClient(connectionOptions) {
  return new TritiumClient(connectionOptions);
}


module.exports = {
  createClient,
};
