var _          = require('lodash');
var fs         = require('fs');

var path     = './data/places.json';
var data     = require('.' + path);
var lastPath = './data/last.txt';

function random (array) {
  return _.shuffle(array)[0];
}

module.exports = {
  // Pick a random place (and ignore the last randomly suggested place)
  pick: function () {
    var placesArray = [];
    var lastPlace = fs.readFileSync(lastPath, 'utf8');
    data.places.forEach( function (places, index) {
      placesArray.push(places);
      if (lastPlace === places.place) {
        placesArray.splice(index, 1);
      }
      if (index + 1 === data.places.length) {
        var result = random(placesArray).place;
        fs.writeFileSync(lastPath, result);
        return console.log(result);
      }
    });
  }
};