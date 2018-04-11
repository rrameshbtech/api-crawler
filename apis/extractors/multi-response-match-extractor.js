module.exports = function MultiResponseExtractor() {

  const pathToData = ['data', 'manufacturerPartNumberSearchReturn', 'products'];
  const fieldToConfirm = 'translatedManufacturerPartNumber';

  function matchesQuantity(priceRange, requiredQuantity) {
    return priceRange.from <= requiredQuantity && priceRange.to >= requiredQuantity;
  }

  function extract(response, request) {

    if (!response) {
      return undefined;
    }

    let productPrice = 0;
    pathToData.reduce((fetchedResponse, path) => fetchedResponse[path], response)    
    .filter(p => p[fieldToConfirm] === request.partNumber)
      .some((product) => {

        productPrice = product
          .prices
          .reduce((selectedPrice, priceRange) => 
            selectedPrice += matchesQuantity(priceRange, request.quantity) ? priceRange.cost : 0
            , 0
          );

        return productPrice > 0 ? true : false;
      }
    );

    return productPrice;
  }

  return {extract};
}