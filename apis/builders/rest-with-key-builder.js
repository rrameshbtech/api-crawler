module.exports = function RestWithKeyBuilder(configs) {

  return function (task) {
    
    function getMethod() {
      return 'GET';
    }

    function getHeaders() {
      return undefined;
    }

    function getPayload() {
      return undefined;
    }

    function getUrl() {
      return `${configs .url}?${configs.queryString}`
        .replace('{apiKey}', configs.apiKey)
        .replace('{partNumber}', task.partNumber);
    }

    return {getHeaders, getPayload, getUrl, getMethod};
  }
};