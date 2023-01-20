const { fetchBreedDescription } = require('./breedFetcher')

var nameOfBreed = process.argv[2]

fetchBreedDescription(nameOfBreed, (error, description)=> {
  if(error){
    console.log ('Error fetch details:', error);
  } else {
    console.log(description)
  }
})


// fetchBreedDescription('Siberian')