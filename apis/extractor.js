
module.exports = function Extractor(apiConfig) {

  const extractor = resolve(apiConfig.extractorType)(apiConfig);

  function resolve() {
    return require(`./extractors/${apiConfig.extractorType}-extractor`);
  }

  function extract(data, request) {
    return extractor.extract(data, request);
  }

  return {
    extract
  };
};