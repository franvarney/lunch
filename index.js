var picker = require('./scripts/picker');
var add = require('./scripts/add');

// Pick a place, run: node index or node index pick
if(!process.argv[2] || process.argv[2] === "pick") picker.pick();

// Add a place, run: node index add "Place Name"
if(process.argv[2] === "add") add.new(process.argv[3]);

