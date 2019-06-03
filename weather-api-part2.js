const request = require('request');

function showWeather(city) {
    request.get(`https://www.metaweather.com/api/location/${city}`, 
        function(error,response,body){
            if(!error && response.statusCode == 200){
                var data = JSON.parse(body);
                console.log(data)
            }
        }
    )
}

showWeather(4118)