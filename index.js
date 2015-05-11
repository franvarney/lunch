var picker = require('./scripts/picker');
var place  = require('./scripts/place');

// Arguments
var command = (process.argv[2]) ? (process.argv[2]).toLowerCase() : '';
var pl      = process.argv[3];

switch (command) {
  case 'pick':
    picker.pick();
    break;
  case 'add':
    place.new(pl);
    break;
  case 'list':
    place.list();
    break;
  case 'remove':
    place.remove(pl);
    break;
  default:
    picker.pick();
    break;
}

