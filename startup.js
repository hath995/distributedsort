var child_process = require('child_process');

//take input of config algorithm to start
//
var CONFIG_FILE = process.argv[2];
var PROCESS_NAME = process.argv[3];

var config = require(CONFIG_FILE);
console.log(config, process.argv);

config.ids.forEach(function(id) {
  child_process.spawn('node', [PROCESS_NAME, CONFIG_FILE, id], {
    stdio:[0,1,2]
  });
});
