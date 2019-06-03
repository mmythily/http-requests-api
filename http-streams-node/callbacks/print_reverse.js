const getHTML = require('../5-http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
};  

const printHTML = (html) => {
    console.log(html. split(''). reverse(). join(''))
}

getHTML(requestOptions, printHTML);