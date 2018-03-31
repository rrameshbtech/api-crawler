const TaskManager = require('./task-manager/task-manager');
const APIBuilder = require('./builder/api-builder');

(function(taskManager, apiBuilder) {
  console.info('Stating api crawler to fetch data...');

  while(taskManager.hasNextTask()) {
    
    taskManager.pop()
  }
  
})(TaskManager(), APIBuilder());