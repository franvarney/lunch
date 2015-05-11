var fs     = require('fs');
var places = fs.readFileSync('./data/places.json', 'utf8');

module.exports = {
  new: function (place) {
    places = JSON.parse(places);
    places.places.push({ "place" : place });
    fs.writeFile('./data/places.json', JSON.stringify(places), function(err) {
      if (err) throw err;
      console.log(place + ' was added!');
    });
  }
};