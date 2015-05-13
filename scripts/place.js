var fs   = require('fs');
var path = './data/places.json';
var data = require('.' + path);

module.exports = {
  // List all places to eat
  list: function () {
    data.places.sort( function (a, b) {
      return a.place > b.place;
    }).forEach( function (places, index) {
      return console.log(places.place);
    });
  },
  // Add a new place to eat
  new: function (newPlace) {
    data.places.forEach( function (places, index) {
      if (newPlace === places.place) {
        return console.log(newPlace + ' has already been added!');
      }
      if (newPlace !== places.place && index + 1 === data.places.length) {
        data.places.push({ 'place' : newPlace });
        fs.writeFile(path, JSON.stringify(data, null, 2), function (err) {
          if (err) throw err;
          return console.log(newPlace + ' was added!');
        });
      };
    });
  },
  // Remove a place to eat
  remove: function (place) {
    var dataLength = data.places.length;
    data.places.forEach( function (places, index) {
      if (place !== places.place && index + 1 === dataLength) {
        return console.log(place + ' doesn\'t exist!');
      }
      if (place === places.place) {
        data.places.splice(index, 1);
      }
      if (index + 1 === dataLength) {
        fs.writeFile(path, JSON.stringify(data, null, 2), function (err) {
          if (err) throw err;
          return console.log(place + ' was removed!');
        });
      }
    });
  }
};