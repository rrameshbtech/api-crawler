const APIClient = require('./api-client');

const APIBuilder = require('./api-builder');
const Extractor = require('./extractor');

module.exports = function APIGenerator() {

  function getClients(apiConfigs) {
    return apiConfigs.map(apiConfig => APIClient(APIBuilder, Extractor, apiConfig));
  }

  return {
    getClients
  };
}