const getHTML = require('../5-http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
};  

const printHTML = (html) => {
    console.log(html.toLowerCase())
}

getHTML(requestOptions, printHTML);