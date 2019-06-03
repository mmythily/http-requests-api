const https = require('https');

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

const getAndPrintHTML =  (options) => {

    https.get(options, response => {
        
        let buffer = [];
        
        response.setEncoding('utf8');

        response.on('data', chunk => {
            buffer.push(chunk);
            //console.log(buffer);
        });

        response.on('end', ()=> {
            console.log(buffer.join());
            console.log('Response stream complete')
        });
    });
}

getAndPrintHTML(requestOptions)