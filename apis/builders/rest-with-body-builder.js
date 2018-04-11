module.exports = function RestWithBodyBuilder(configs) {

  return function (task) {

    function getMethod() {
      return 'POST';
    }

    function getHeaders() {
      return {'content-type': 'application/json'};
    }

    function getPayload() {
      return {'login': configs.client, 'apiKey': configs.apiKey, 'search_token': task.partNumber};
    }

    function getUrl() {
      return configs.url;
    }

    return {getHeaders, getPayload, getUrl, getMethod};
  };
};