var _          = require('lodash');
var fs         = require('fs');
var placesPath = './data/places.json';
var lastPath   = './data/last.txt';

function random (array) {
  return _.shuffle(array)[0];
}

module.exports = {
  // Pick a random place (and ignore the last random place)
  pick: function () {
    fs.readFile(placesPath, 'utf8', function (err, data) {
      if (err) throw err;
      var object = JSON.parse(data);
      var placesArray = [];
      var lastPlace = fs.readFileSync(lastPath, 'utf8');
      object.places.forEach(function (places, index) {
        placesArray.push(places);
        if (lastPlace === places.place) {
          placesArray.splice(index, 1);
        }
        console.log(placesArray);
        if (index + 1 === object.places.length) {
          var result = random(placesArray).place;
          fs.writeFileSync(lastPath, result);
          return console.log(result);
        }
      });
    });
  }
};