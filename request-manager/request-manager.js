const Observable = require('rxjs/Observable').Observable;
require("rxjs/add/observable/of");

const tasks = require('../data/tasks.json');

module.exports = function TaskManager() {

  function hasNextTask() {
    return tasks.length > 0;
  }

  function getRequestPipe() {
    return Observable.of(...tasks);
  }

  return {
    hasNextTask,
    getRequestPipe
  };
};