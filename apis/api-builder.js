
module.exports = function APIBuilder(apiConfig) {

  const builder = resolve(apiConfig.builderType)(apiConfig);

  function resolve() {
    return require(`./builders/${apiConfig.type}-builder`);
  }

  function getAPIOptions(task){
    const taskRequestBuilder = builder(task);

    const apiObject = {
      'url': taskRequestBuilder.getUrl(),
      'method': taskRequestBuilder.getMethod()
    };

    if(getHeaders()) {
      apiObject["headers"] = taskRequestBuilder.getHeaders();
    }

    if(getPayload()) {
      apiObject["data"] = taskRequestBuilder.getPayload();
    }

    return apiObject;
  }

  return {
    getAPIOptions
  };

};