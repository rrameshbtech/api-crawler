const RequestManager = require('./request-manager/request-manager');
const APIGenerator = require('./apis/api-generator');
const DataStore = require('./db/data-store');

(function (requestManager, apiGen, dataStore) {
  console.info('Starting api crawler to fetch data...');
  const config = require('./config.json');

  const apiClients = apiGen.getClients(config.apis);
  const requestPipe = requestManager.getRequestPipe();
  
  apiClients.map(apiClient => {
    apiClient.consume(requestPipe);

    apiClient.getOutputPipe()
    .subscribe((value) => {
        dataStore.write(value);
      }
    );
  });

})(RequestManager(), APIGenerator(), DataStore());