const getHTML = require('./5-http-functions');


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
};  

const printHTML = (html) => {
    console.log(html)
}

console.log(getHTML(requestOptions, printHTML));