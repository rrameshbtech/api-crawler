const axios = require('axios');
const Observable = require('rxjs/Observable').Observable;
const Subject = require('rxjs/Subject').Subject;
require('rxjs/add/operator/zip');
require('rxjs/add/operator/map');
require('rxjs/add/observable/interval');

module.exports = function APIClient(APIBuilder, Extractor, apiConfig) {

  const builder = APIBuilder(apiConfig);
  const extractor = Extractor(apiConfig);
  const outputPipe = new Subject();

  function call(request) {
    const options = builder.getAPIOptions(request);

    return axios(options).then((res) => {
      outputPipe.next({
        request,
        response: extractor.extract(res, request)
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  function consume(requestPipe) {
    requestPipe.zip(Observable.interval(apiConfig.minInterval), (task, index) => task).subscribe((request) => {
      call(request);
    });
  }

  function getOutputPipe() {
    return outputPipe;
  }

  return {consume, getOutputPipe};
};