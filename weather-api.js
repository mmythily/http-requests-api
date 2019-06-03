//lecture by Ramsees T

var request = require('request');
/*Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
https://www.npmjs.com/package/request
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/

var query = process.argv[2];

request(`https://www.metaweather.com/api/location/search?query=${query}`, function(error,response,body){
    if (error) {
        console.log('error occured', error);
    }
    //if request was succesfful 
    else if (response.statusCode === 200) {
        console.log(body);

        var data = JSON.parse(body);
        var weatherID = data[0]['woeid'];
        //console.log(`weather id ${weatherID}`);
        
        //make a futher request to check with weatherID
        request(`https://www.metaweather.com/api/location/${weatherID}`, function(error,response,body){
        
            if (response.statusCode === 200) {
                //console.log(body);
        
                var data = JSON.parse(body);

                var temp = data.consolidated_weather[0]['the_temp'];
                console.log(`Temperature in ${query} is : ${Math.round(temp,2)}`)
            }
        });
    }
});


