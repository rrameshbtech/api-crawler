const tasks = require('../data/tasks.json');

module.exports = function TaskManager() {

  function hasNextTask() {
    return tasks.length > 0;
  }

  function pop() {
    return tasks.pop();
  }

  return {
    hasNextTask,
    pop
  };
};