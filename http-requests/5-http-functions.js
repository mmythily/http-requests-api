const https = require('https');

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

const printHTML = (html) => {
    console.log(html)
}

module.exports = 
    function (options, callback) {
        https.get(options, response => {
            
            let buffer = [];
            
            response.setEncoding('utf8');

            response.on('data', chunk => {
                buffer.push(chunk);
            });

            response.on('end', ()=> {
                callback(buffer.join());
                console.log('Response stream complete')
            });
        });
    }