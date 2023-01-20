

const request = require('request');

const fetchBreedDescription = function(nameOfBreed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${nameOfBreed}`,
    (error, response, body) => {

      if (error) {
        callback(error, null)
        return
      }
      const data = JSON.parse(body);


      if (response.statusCode !== 200) {
        console.log('Re-enter URL');
        callback('Re-enter URL', null)
        return
      };
      if (data.length === 0) {
        console.log('Breed does not exist');
        callback('Breed does not exist', null)
      } else {
        console.log('BODY DESCRIPTION:', data[0].description)
        callback(null, data[0].description)
      }
    })
}

module.exports = {
  fetchBreedDescription
}