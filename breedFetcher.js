
var breedName = process.argv[2];
const request = require('request');
request(`https://api.thecatapi.com/v1/breedssearch?q=${breedName}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(data);
  console.log(typeof data);
  //console.log(data[0].description)

  if (response.statusCode !== 200) {
    console.log('Re-enter URL');
    return
  };
  if (data.length === 0) {
    console.log('Breed does not exist');
  };
})


