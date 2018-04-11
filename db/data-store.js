
module.exports = function DataStore() {

  function write(dataToUpdate) {
    console.log(dataToUpdate.request.partNumber, dataToUpdate.response);
  }
  
  return {
    write
  };
};