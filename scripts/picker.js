var _  = require('lodash');
var fs = require('fs');

function random (array) {
  return _.shuffle(array)[0];
}

module.exports = {
  pick: function () {
    fs.readFile('./data/places.json', 'utf8', function (err, data) {
      if (err) throw err;
      var obj = JSON.parse(data);
      var places = [];
      obj.places.forEach(function (place, index) {
        places.push(place);
        if (index + 1 === obj.places.length) {
          return console.log(random(places).place);
        }
      });
    });
  }
};