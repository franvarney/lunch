var fs       = require('fs');
var dataPath = './data/places.json';

module.exports = {
  // List all places to eat
  list: function () {
    fs.readFile(dataPath, 'utf8', function (err, data) {
      if (err) throw err;
      var object = JSON.parse(data);
      var placesArray = [];
      object.places.forEach(function (places, index) {
        placesArray.push(places.place);
        if (index + 1 === object.places.length) {
          var sorted = (placesArray.sort()).toString();
          return console.log(sorted.replace(/,/g, '\n'));
        }
      });
    });
  },
  // Add a new place to eat
  new: function (newPlace) {
    fs.readFile(dataPath, 'utf8', function (err, data) {
      if (err) throw err;
      var object = JSON.parse(data);
      object.places.forEach(function (places, index) {
        if (newPlace === places.place) {
          return console.log(newPlace + ' has already been added!');
        }
        if (newPlace !== places.place && index + 1 === object.places.length) {
          object.places.push({ "place" : newPlace });
          fs.writeFile(dataPath, JSON.stringify(object), function(err) {
            if (err) throw err;
            return console.log(newPlace + ' was added!');
          });
        };
      });
    });
  },
  // Remove a place to eat
  remove: function (place) {
    fs.readFile(dataPath, 'utf8', function (err, data) {
      if (err) throw err;
      var object = JSON.parse(data);
      var placesArray = [];
      object.places.forEach(function (places, index) {
        if (place !== places.place && index + 1 === object.places.length) {
          return console.log(place + ' doesn\'t exist!');
        }
        placesArray.push(places.place);
        if (place === places.place) {
          object.places.splice(index, 1);
        }
        if (index + 1 === object.places.length) {
          fs.writeFile(dataPath, JSON.stringify(object), function(err) {
            if (err) throw err;
            return console.log(place + ' was removed!');
          });
        }
      });
    });
  }
};