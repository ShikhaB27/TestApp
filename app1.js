const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options ({
    a : {
      demand : true,
      decribe : 'Address to fetch weather for',
      alias : 'address',
      string : true
    }
  })
  .help()
  .alias('help','h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);

// console.log(argv);

request({
  url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json : true
},(error, response, body) => {
  //we use stringify() here to format the output
  // console.log(JSON.stringify(body, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);

});
